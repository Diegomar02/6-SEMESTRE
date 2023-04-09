import { Component } from '@angular/core';
import { HeroesService,Heroe } from '../shared/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  heroes:Heroe[];

  constructor(public servicio: HeroesService){
    this.heroes=this.servicio.getHeroes();
    console.log(this.heroes);

  }

  ver(aux:string){
    console.log("Estoy en el metodo ver"+aux);
  }

  ngOnInit():void{

  }

}
