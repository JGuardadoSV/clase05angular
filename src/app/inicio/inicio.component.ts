import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

   
  contactos = [
    { id: 1, nombre: 'Josue Guardado', email: 'demo@gmail.com',telefono:784512366 },
    { id: 2, nombre: 'Jaime Perez', email: 'demo@gmail.com',telefono:784512366 },
    { id: 2, nombre: 'David Perez', email: 'demo@gmail.com',telefono:784512366 },
    { id: 3, nombre: 'Rosita Lopez', email: 'demo@gmail.com',telefono:784512366 },
    // Agrega más elementos aquí si es necesario
  ];

}
