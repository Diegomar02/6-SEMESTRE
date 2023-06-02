import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltasComponent } from './altas/altas.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AbcService } from './abc.services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AltasComponent,
    MostrarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AbcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
