import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TodosComponent } from './pages/todos/todos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NewTodoComponent } from './pages/todos/new-todo/new-todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/new', component: NewTodoComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// TodosComponent    /tareas      <div>