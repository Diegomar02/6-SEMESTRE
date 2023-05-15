import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPersonsComponent } from './pages/control-persons/control-persons.component';

const routes: Routes = [
  { path: 'home', component: ControlPersonsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
