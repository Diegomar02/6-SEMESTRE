import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-sesion',
  templateUrl: './boton-sesion.component.html',
  styleUrls: ['./boton-sesion.component.css']
})
export class BotonSesionComponent {
  sesion: boolean = false;
  usuarios: Usuario[] = [];
  usuarioActual!: Usuario;

}
interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  contrasena: string;
  nacimiento: Date;
}

