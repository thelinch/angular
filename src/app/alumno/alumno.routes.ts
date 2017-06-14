import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoComponent } from "app/alumno/alumno.component";
import { CursosComponent } from "app/alumno/cursos/cursos.component";
import { CursoDetalleComponent } from "app/alumno/cursos/curso-detalle/curso-detalle.component";
import { EjerciciosComponent } from "app/alumno/ejercicios/ejercicios.component";
import { FlujogramaCursosComponent } from "app/alumno/flujograma-cursos/flujograma-cursos.component";
import { ActividadesComponent } from "app/alumno/actividades/actividades.component";
import { ActividadDetalleComponent } from "app/alumno/actividad-detalle/actividad-detalle.component";

const routes: Routes = [
  {
    path: '', component: AlumnoComponent, children: [
      { path: 'cursos', component: CursosComponent, children: [{ path: ':id', component: CursoDetalleComponent }] },
      { path: 'ejercicios', component: EjerciciosComponent },
      {
        path: "flujograma-curso", component: FlujogramaCursosComponent
      },
      { path: "actividades", component: ActividadesComponent,children:[{path:":id",component:ActividadDetalleComponent}] }]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoRoutingModule { }
