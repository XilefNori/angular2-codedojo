import {Component, Input} from '@angular/core';

import {Todo} from "../shared/todo.model";
import {TodoItemComponent} from '../todo-item/todo-item.component';

@Component({
    selector: 'todo-list',
    templateUrl: './app/components/todo-list/todo-list.component.html',
    styleUrls: ['./app/components/todo-list/todo-list.component.css'],
    directives: [TodoItemComponent],
})

export class TodoListComponent {
    @Input() todos:Todo[];

    get sortedTodos() {
        let todos = this.todos.map((todo:Todo) => todo);
        // let todos = JSON.parse(JSON.stringify(this.todos));

        return todos.sort((a:Todo, b:Todo) => {
            if (a.title > b.title) return 1;
            else if (a.title < b.title) return -1;
            else return 0;
        }).sort((a:Todo, b:Todo) => {
            if (a.done && !b.done) return 1;
            else if (!a.done && b.done) return -1;
            else return 0;
        });
    }

    onTodoDeleted(todo:Todo) {
        console.log(todo); // @debug [sboborykin]

        if (todo) {
            let index = this.todos.indexOf(todo);
            console.log(index); // @debug [sboborykin]

            if (index > -1) {
                this.todos.splice(index, 1);
            }
        }
    }
}
