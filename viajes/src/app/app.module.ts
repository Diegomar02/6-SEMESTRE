import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourListComponent } from './componentes/tour-list/tour-list.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { FeedbackComponent } from './componentes/feedback/feedback.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AboutComponent } from './componentes/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TourListComponent,
    ReservasComponent,
    GaleriaComponent,
    FeedbackComponent,
    InicioComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
