import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aNombre: Array<String>;


  constructor() { }

  ngOnInit() {
    this.aNombre = ['Megabebe', 'BiTriX', 'bitrol0', 'Alex'];
  }

}
