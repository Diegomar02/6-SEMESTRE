import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DomseguroPipe } from './domseguro.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
