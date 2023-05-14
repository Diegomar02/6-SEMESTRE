import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { FeedbackComponent } from './componentes/feedback/feedback.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { TourListComponent } from './componentes/tour-list/tour-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'TourList', component: TourListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
