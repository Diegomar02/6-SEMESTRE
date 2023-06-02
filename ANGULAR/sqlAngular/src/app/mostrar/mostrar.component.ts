import { Component, OnInit} from '@angular/core';
import { AbcService } from '../abc.services';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit{

  array:any[]=[];

  constructor(private absService:AbcService){
    this.absService.consulta('http://localhost:4000/user'.subcribe((res:any)=>{
       console.log("Consulta general...");
       console.log(res)
       this.array=res.array;});
    }

    ngOnInit(): void {

    }
  }


