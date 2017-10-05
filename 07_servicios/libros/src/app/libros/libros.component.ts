import { BooksService } from '../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  claveLibro: string;
  aLibros: string[];
  constructor(private buscarServices: BooksService) { }

  ngOnInit() {
  }

  buscarLibros() {
    this.aLibros = this.buscarServices.getLibros(this.claveLibro);
    console.log(this.aLibros);
  }


}
