
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Airbnb1Component } from './airbnb1/airbnb1.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BotonSesionComponent } from './boton-sesion/boton-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    Airbnb1Component,
    BotonSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
