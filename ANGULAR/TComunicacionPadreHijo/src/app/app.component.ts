import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TComunicacionPadreHijo';
  valor1:number=0;
  valor2:number=0;
  valor3:number=0;
  resultado:string="";

  contructor(){
    this.generar();
  }

  tirar(){
    this.generar();
    if(this.valor1==this.valor2&&this.valor1==this.valor3)
      this.resultado="GANASTE DIEGO MARQUEZ GOMEZ";
    else
      this.resultado="PERDISTE DIEGO MARQUEZ GOMEZ";
  }

  generar(){
    this.valor1=this.retornarAleatorio();
    this.valor2=this.retornarAleatorio();
    this.valor3=this.retornarAleatorio();
  }

  retornarAleatorio(){
    return Math.trunc(Math.random()*6)+1;
  }
}

