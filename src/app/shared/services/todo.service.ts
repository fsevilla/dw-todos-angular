import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from '../models/todo';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    const url = environment.apiUrl + 'tareas';
    return this.httpClient.get<Todo[]>(url);
  }

  newTodo(todo: Todo): Observable<Todo> {
    const url = environment.apiUrl + 'tareas';
    return this.httpClient.post<Todo>(url, todo);
  }
}
