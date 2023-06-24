import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material/dialog';

import { Todo } from 'src/app/shared/models/todo';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'dw-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {

  appearance: MatFormFieldAppearance = 'outline';

  todo: Todo = {
    title: '',
    description: '',
    status: 'new'
  }

  constructor(
    private todoService: TodoService,
    private snackBar: SnackBarService,
    private dialogRef: MatDialogRef<NewTodoComponent>
  ) {}

  create() {
    if(!this.todo.title || !this.todo.description || !this.todo.status) return;
    
    console.log('Se va a crear la tarea', this.todo);
    this.todoService.newTodo(this.todo).subscribe({
      next: (response: Todo) => {
        this.snackBar.open(`Task "${response._id}" created successfully`);
        // this.router.navigate(['todos']);
        this.dialogRef.close(true);
      },
      error: () => {
        this.snackBar.open('Oops! Something failed');
      }
    });

    this.todo.title = '';
  }

  cancel() {
    // redirect to todos
    console.log('Cancelar')
  }

}
