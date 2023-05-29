import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPersonsComponent } from './pages/control-persons/control-persons.component';
import { FormPersonsComponent } from './pages/form-persons/form-persons.component';
import { ListPersonsComponent } from './pages/list-persons/list-persons.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ControlPersonsComponent,
    FormPersonsComponent,
    ListPersonsComponent
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
