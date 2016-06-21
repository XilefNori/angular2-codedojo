import {Injectable} from '@angular/core';

import {ITodo} from './todo.model';
import {todos} from './todo.data';

@Injectable()
export class TodoService {
    getTodos(): Promise<ITodo[]> {
        return new Promise(resolve => setTimeout(() => resolve(todos), 1000));
    }

    addTodo(todo: ITodo): void {
        todos.push(todo);
    }

    deleteTodo(todo: ITodo): void {
        console.log(todo); // @debug [sboborykin]

        let index = todos.indexOf(todo);
        console.log(index); // @debug [sboborykin]

        if (index > -1) {
            todos.splice(index, 1);
        }
    }
}
