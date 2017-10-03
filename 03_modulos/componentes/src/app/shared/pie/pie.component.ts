import { Component, OnInit } from '@angular/core';

// japmonge
interface Curso {
 autor: string;
 empresa: string;
 fecha: Date;
}
// fin japmonge

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit  {

  // japmonge
  curso: Curso;
  // fin japmonge
  constructor() {
   }

  ngOnInit() {
    // japmonge
    this.curso.autor = 'BiTriX';
    this.curso.empresa = 'bitrol0 Company rules!';
    this.curso.fecha = new Date();
    // fin japmonge
  }

}
