import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Todo } from 'src/app/shared/models/todo';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { TodoService } from 'src/app/shared/services/todo.service';
import { NewTodoComponent } from './new-todo/new-todo.component'; 


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []; 
  error: boolean = false;

  displayedColumns: string[] = ['title', 'description', 'status', 'created_at'];

  constructor(
    private todoService: TodoService,
    private snackBar: SnackBarService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (response: Todo[]) => {
        this.todos = response;
        this.error = false;
        this.snackBar.open(`Se encontraron ${response.length} tareas`);
      },
      error: () => {
        this.error = true;
        this.snackBar.open('Ocurrio un error');
      }
    });
  }

  openNewTodo() {
    const dialogRef = this.matDialog.open(NewTodoComponent, {
      width: '600px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe((response) => {
      if(response) {
        this.getTodos();
      }
    });
  }
}

