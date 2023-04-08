import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { BuscarComponent } from './buscar/buscar.component';

import { HeroesService } from './shared/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
