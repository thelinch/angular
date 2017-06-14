import { Component, OnInit } from '@angular/core';
import { Cursos } from "app/alumno/cursos/cursos";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
 lista:Array<Cursos>=new Array;
  constructor() { }

  ngOnInit() {
    this.iniciar();
  }
iniciar():void{
  this.lista.push(new Cursos("funciones",23.3,"Matematicas"));
  this.lista.push(new Cursos("polinomios",22.3,"Matematicas"));
  this.lista.push(new Cursos("planos",10.3,"Matematicas"));
  this.lista.push(new Cursos("funciones",11.3,"Matematicas"));
  this.lista.push(new Cursos("funciones",10.3,"Matematicas"));
  
}
}
