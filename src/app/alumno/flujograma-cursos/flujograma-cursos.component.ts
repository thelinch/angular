import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujograma-cursos',
  templateUrl: './flujograma-cursos.component.html',
  styleUrls: ['./flujograma-cursos.component.css']
})
export class FlujogramaCursosComponent implements OnInit {
curso:string[]=["html","csss"];
  constructor() { }

  ngOnInit() {
  }

}
