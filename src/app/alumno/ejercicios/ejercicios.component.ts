import { Component, OnInit } from '@angular/core';
import { ejercicios } from "app/alumno/ejercicios/Ejercicios";

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
   lista: Array<ejercicios> = new Array;
  constructor() { }

  ngOnInit() {
    this.iniciar();
  }
  iniciar(): void {
    this.lista.push(new ejercicios("¿la raiz cuadrada de 4?", 2, "matematicas"));
    this.lista.push(new ejercicios("¿x+4=70?", 64, "matematicas"));
    this.lista.push(new ejercicios("¿la raiz cuadrada de 1?", 1, "matematicas"));

  }
}
