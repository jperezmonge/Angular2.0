import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksService } from './books.service';
import { LibrosComponent } from './libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
