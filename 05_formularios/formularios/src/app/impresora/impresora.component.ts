import { Component, OnInit } from '@angular/core';
import { Provincia } from './provincias.modelo';

@Component({
    selector: 'app-impresora',
    templateUrl: './impresora.component.html',
    styleUrls: ['./impresora.component.css']
})
export class ImpresoraComponent implements OnInit {
    aImpresoras: Array<Provincia>;
    provinciaSeleccionada: Provincia;
    impresoraSeleccionada: string;
    print: boolean;
    isClaro: boolean;
    mostrarFinal: boolean;

      constructor() { }

      ngOnInit() {
        this.aImpresoras = [{
            id: 1, name: 'Prueba'
        }];
        this.print = false;

        this.isClaro = false;

        this.mostrarFinal = true;
    }

    avisarPrint() {
        console.log('avisarPrint');
    }
    avisarProvincia() {
        console.log('avisarProvincia');
    }
}
