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
    nombre:"Matias",
    apellido:"Queroso",
    telefono:"4493675429",
    correo:"mqueroso@gmail.com",
    image:"xx"
  };
  user2: usuario = {
    nombre:"Vicente",
    apellido:"Levidente",
    telefono:"4498962854",
    correo:"levidenteVice@hotmail.com",
    image:"yy"
  };
  user3: usuario = {
    nombre:"Zacarias",
    apellido:"Flores del Campo",
    telefono:"4492744158",
    correo:"zacafloca@gmail.com",
    image:"zz"
  };
}
