import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { EditarContaComponent } from './editar-conta/editar-conta.component';
import { ConsultarContaComponent } from './consultar-conta/consultar-conta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path : '', component: ConsultarContaComponent},
  {path : 'cadastrar-conta', component: CriarContaComponent},
  {path : 'consultar-conta', component: ConsultarContaComponent},
  {path : 'editar-conta', component: EditarContaComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    CriarContaComponent,
    EditarContaComponent,
    ConsultarContaComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
