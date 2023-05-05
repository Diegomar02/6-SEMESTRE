import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  forma:FormGroup;
  title = 'AcReactivosFormulario';

  constructor(){
    this.forma = new FormGroup({
      'nombre':new FormControl('Diego',Validators.minLength(3)),
      'apellido':new FormControl('Marquez',Validators.required),
      'correo':new FormControl('dm1455929@gmail.com',Validators.email)
    })
  }
  guardarCambios():void{
    console.log("metodo guardarCambios");
    console.log(this.forma.value);
    console.log(this.forma);
  }
}
