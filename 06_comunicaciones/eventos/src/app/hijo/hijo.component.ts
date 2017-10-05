import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() usuario: string;
  constructor() { }

  @Output() borrar: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  btnBorrar() {
    this.borrar.emit();
  }
}
