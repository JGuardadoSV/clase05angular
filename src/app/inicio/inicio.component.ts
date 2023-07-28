import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  contactos: any[]; // Declara una variable para almacenar los elementos de la API

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.obtenerElementosDesdeAPI();
  }

  obtenerElementosDesdeAPI() {

    this.http.get<any[]>('http://localhost:3000/contacto')
      .subscribe(data => {
        this.contactos = data; // Almacena los datos de la API en la variable "elementos"
      });
 
}
}
