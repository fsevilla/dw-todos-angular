import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  open(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }
}
