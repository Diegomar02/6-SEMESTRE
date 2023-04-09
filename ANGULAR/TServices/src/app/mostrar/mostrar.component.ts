import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe} from '../shared/heroes.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  heroes:Heroe[];

  constructor(public servicio: HeroesService){
    this.heroes=this.servicio.getHeroes();
    console.log(this.heroes);

  }
  /*
  servicio: HeroesServicio;
  contructor(public service:HeroesService){
    this.servicio=service;
    this.heroes=this.servicio.getHeroes();
  }
  */


  ngOnInit():void{

  }

}
