import {Component} from '@angular/core';

import {TodoFormComponent} from './components/todo-form/todo-form.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {Todo} from './components/shared/todo.model';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoFormComponent, TodoListComponent]
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Angular 2Do';
    }

    // onTodoAdded(todo: Todo) {
    //     this.todos.push(todo);
    // }

    // addTodo(event: any) {
    //     // console.log(event);
    //     if(event.type === 'keyup' && event.which === 13) {
    //         this.todos.push(event.target.value);
    //     }
    // }

    // addTodo(title: string) {
    //     this.todos.push(new Todo(title));
    //     console.log(title);
    // }
}
