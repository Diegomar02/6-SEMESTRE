import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  forma:FormGroup;
  usuario:any={
    nombre:"Betsy",
    apellido:"Jocelyn",
    correo:"betsy@gmail.com"
  }

  title = 'AcReactivosFormulario';

  constructor(){
    this.forma = new FormGroup({
      'nombre':new FormControl('',[Validators.required,Validators.minLength(3)]),
      'apellido':new FormControl('',[Validators.required,this.noPerez]),
      'correo':new FormControl('',[Validators.required,Validators.email])
    })
    this.forma.setValue(this.usuario);
  }
  guardarCambios():void{
    console.log(this.forma.value);
    console.log(this.forma);
    this.forma.reset(this.usuario);
  }

  noPerez(control:FormControl):{[s:string]:boolean}| null { if(control.value==="Perez"){
    return{
      noSolano:true
    } 
  }
  return null }
}
