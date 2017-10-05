
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formLibros: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formLibros = this.formBuilder.group({
      titulo: ['', Validators.required],
      autor: [],
      editorial: [],
      fecha: ['2017']
    });
  }

  enviarFormLibros () {
        if (this.formLibros.valid) {
          console.log (this.formLibros.value);
        }
      }

}
