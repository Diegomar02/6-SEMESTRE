import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './altas/altas.component';
import { MostrarComponent } from './mostrar/mostrar.component';


const routes: Routes = [
  {path:'altas',component:AltasComponent},
  {path:'mostrar',component:MostrarComponent},

  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
