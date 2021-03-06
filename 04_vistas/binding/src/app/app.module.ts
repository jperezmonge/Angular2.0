import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Modulos de la aplicacion
import { EnlacesModule } from './enlaces/enlaces.module';

import { AppComponent } from './app.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { ListaComponent } from './lista/lista.component';
import { ListaEjercicioComponent } from './lista-ejercicio/lista-ejercicio.component';

@NgModule({
  declarations: [
    AppComponent,
    Formulario2Component,
    ListaComponent,
    ListaEjercicioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EnlacesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
