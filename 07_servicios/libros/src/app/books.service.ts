import { Injectable } from '@angular/core';
import { LIBROS } from './mockLibros';
@Injectable()
export class BooksService {

  aLibros = LIBROS;
  constructor() { }

  getLibros (clave) {
    return this.aLibros;
  }

}
