import { AbcService} from '../abc.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit{
  id?:string;
  name?:string;
  lastname?:string;
  email?:string;
  tel?:string;

  constructor(private absService: AbcService){}
  
  ngOnInit(): void {}

  insertar():void{
    let body={
      idUser:this.id,
      name:this.name,
      lastname:this.lastname,
      contact:this.email,
      cellphone:this.tel
    };
    this.absService
    .alta('http:localhost:4000/user',body)
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  limpiar():void{
    this.id='';
    this.name='';
    this.lastname='';
    this.email='';
    this.tel='';
  }
}
