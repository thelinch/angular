import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AlumnoComponent } from "app/alumno/alumno.component";
import { AlumnoRoutingModule } from "app/alumno/alumno.routes";
import { CursosComponent } from "app/alumno/cursos/cursos.component";
import { CursoDetalleComponent } from "app/alumno/cursos/curso-detalle/curso-detalle.component";
import { MaterializeModule } from 'ng2-materialize';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { FlujogramaCursosComponent } from './flujograma-cursos/flujograma-cursos.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ActividadDetalleComponent } from './actividad-detalle/actividad-detalle.component';
@NgModule({
  imports: [AlumnoRoutingModule, CommonModule, FormsModule,MaterializeModule.forRoot()],
  exports: [AlumnoComponent],
  declarations: [AlumnoComponent, CursosComponent,CursoDetalleComponent, EjerciciosComponent, FlujogramaCursosComponent, ActividadesComponent, ActividadDetalleComponent],
  providers: [],
})
export class AlumnoModule { }
