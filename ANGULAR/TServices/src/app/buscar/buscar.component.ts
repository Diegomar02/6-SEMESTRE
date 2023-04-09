import { Component } from '@angular/core';
import { HeroesService,Heroe } from '../shared/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  heroes:Heroe[];
  index:number=-1;
  datos!:Heroe;
  mensaje:string="";
  

  constructor(public servicio: HeroesService){
    this.heroes=this.servicio.getHeroes();
    console.log(this.heroes);

  }

  ver(aux:string){
    console.log("Estoy en el metodo ver"+aux);
    this.index=this.heroes.findIndex(p=>p.nombre===aux);
    console.log(this.index);
    if(this.index!==-1){
      this.datos=this.heroes[this.index];
    }
    else{
      this.mensaje="El heroe no existe"; 
      console.log(this.mensaje);
      setTimeout(()=>{
        this.mensaje="";
      },2000);
    }
  }

  ngOnInit():void{

  }

}
