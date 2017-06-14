import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app.routes";
import { LoginComponent } from "app/login/login.component";
import { PaginaNoEncontradaComponent } from "app/pagina-no-encontrada/pagina-no-encontrada.component";
import { HomeComponent } from './home/home.component';
import { MaterializeModule } from 'ng2-materialize';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNoEncontradaComponent,
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
