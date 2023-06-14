import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisorComponent } from './divisor/divisor.component';
import { EmisorComponent } from './emisor/emisor.component';
import { FijaComponent } from './fija/fija.component';
import { RealimentacionComponent } from './realimentacion/realimentacion.component';

const routes: Routes = [
  {path:'divisor',component:DivisorComponent},
  {path:'emisor',component:EmisorComponent},
  {path:'fija',component:FijaComponent},
  {path:'realimentacion',component:RealimentacionComponent},

  {path:'**',pathMatch:'full',redirectTo:'divisor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
