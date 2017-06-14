

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { PaginaNoEncontradaComponent } from "app/pagina-no-encontrada/pagina-no-encontrada.component";
import { HomeComponent } from "app/home/home.component";
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent, children: [
      { path: 'alumno', loadChildren: '../app/alumno/alumno.module#AlumnoModule' }
    ]
  },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

