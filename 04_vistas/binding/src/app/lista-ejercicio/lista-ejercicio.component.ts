import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-ejercicio',
  templateUrl: './lista-ejercicio.component.html',
  styleUrls: ['./lista-ejercicio.component.css']
})
export class ListaEjercicioComponent implements OnInit {

  aNombre: Array<String>;
  text: string;
  constructor() { }

  ngOnInit() {
    this.aNombre = [];
  }

  Agregar(valorNombre) {
    console.log(valorNombre);
    this.aNombre.push(valorNombre);
  }

  AgregarText() {
    this.aNombre.push(this.text);
  }
}
