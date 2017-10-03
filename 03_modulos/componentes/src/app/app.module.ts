// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos de la aplicacion
import { SharedModule } from './shared/shared.module';

// Componentes
import { AppComponent } from './app.component';
import { LadoComponent } from './lado/lado.component';

@NgModule({
  declarations: [
    // aqui van los componentes
    AppComponent,
    LadoComponent
  ],
  imports: [
    // Aqui van los modulos
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
