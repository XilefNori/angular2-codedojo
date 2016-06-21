import {Component} from '@angular/core';

import {TodoFormComponent} from './components/todo-form/todo-form.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {Todo} from './components/shared/todo.model';
import {TodoService} from "./components/shared/todo.service";

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoFormComponent, TodoListComponent],

    providers: [TodoService]
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Angular 2Do';
    }
}
