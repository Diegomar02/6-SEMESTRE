import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  usuario:any;
  title = 'AcApiTarjeta';

  constructor(private usuarioServicio:UsuarioService){}

  ngOnInit() {
    this.recuperarPersona();
  }

  recuperarPersona(){
    this.usuarioServicio.retornar()
    .subscribe(result=>this.usuario=result);
  }

  presion(){
    this.recuperarPersona();
  }
}
