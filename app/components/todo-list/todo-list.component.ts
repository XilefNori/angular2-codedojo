import {Component, Input, OnInit} from '@angular/core';

import {ITodo, Todo} from "../shared/todo.model";
import {TodoItemComponent} from '../todo-item/todo-item.component';
import {TodoService} from "../shared/todo.service";

@Component({
    selector: 'todo-list',
    templateUrl: './app/components/todo-list/todo-list.component.html',
    styleUrls: ['./app/components/todo-list/todo-list.component.css'],
    directives: [TodoItemComponent]
})

export class TodoListComponent implements OnInit {
    todos: ITodo[];

    // private todoService: TodoService;
    // constructor(todoService: TodoService) {
    //     this.todoService = todoService;
    // }

    constructor(private todoService: TodoService) {
        this.todos = [];
        console.log(this.todoService);
    }

    ngOnInit() {
        this.todoService.getTodos().then(todos => this.todos = todos);

        console.log('ngOnInit');
    }

    get sortedTodos(): ITodo[] {
        let todos = this.todos.map((todo: ITodo) => todo);
        // let todos = JSON.parse(JSON.stringify(this.todos));

        return todos.sort((a, b) => {
            if (a.title > b.title) return 1;
            else if (a.title < b.title) return -1;
            else return 0;
        }).sort((a, b) => {
            if (a.done && !b.done) return 1;
            else if (!a.done && b.done) return -1;
            else return 0;
        });
    }

    onTodoDeleted(todo: ITodo): void {
        this.todoService.deleteTodo(todo);
    }
}
