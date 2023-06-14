import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmisorComponent } from './emisor/emisor.component';
import { DivisorComponent } from './divisor/divisor.component';
import { RealimentacionComponent } from './realimentacion/realimentacion.component';
import { FijaComponent } from './fija/fija.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmisorComponent,
    DivisorComponent,
    RealimentacionComponent,
    FijaComponent
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
