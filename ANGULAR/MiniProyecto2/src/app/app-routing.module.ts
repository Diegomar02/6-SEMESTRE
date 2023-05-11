import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Airbnb1Component } from './airbnb1/airbnb1.component';

const routes: Routes = [
  { path:"airbnb1",component:Airbnb1Component},
  { path:"",redirectTo:'/airbnb1',pathMatch:'full'},
  { path:"**",redirectTo:"airbnb1"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
