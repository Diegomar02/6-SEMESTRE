import { Component } from '@angular/core';
import { usuario } from '../modelo/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AcPracticaInterpolacion';

  user1: usuario = {
    nombre:"Firulais",
    edad:"5 años",
    telefono:"4492784228",
    correo:"firulais@gmail.com",
    image:"xx"
  };
  user2: usuario = {
    nombre:"Solovino",
    edad:"3 años",
    telefono:"4491234567",
    correo:"solovino@hotmail.com",
    image:"yy"
  };
  user3: usuario = {
    nombre:"Pulgoso",
    edad:"2 años",
    telefono:"4499876543",
    correo:"pulgoso@gmail.com",
    image:"zz"
  };
}
