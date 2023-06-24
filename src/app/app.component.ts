import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: any = 'Francisco';

  cargando: boolean = false;

  color: string = 'blue';

  cambios: number = 0;

  // tareas: Array<string> = [];

  constructor() {
    this.cargando = true;

    setTimeout(() => {
      this.nombre = 'Pedro';
      this.cargando = false;
    }, 3000);
  }

  cambiarColor() {
    this.color = this.color === 'red' ? 'blue' : 'red';
    this.cambios++;
  }


}

// document.getElementById('boton').addEventListener('click', () => {})
// Array<string|number|boolean>
// ['hola', 1, true]