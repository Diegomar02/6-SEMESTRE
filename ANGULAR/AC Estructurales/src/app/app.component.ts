import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre: string="";
  promedio: number=0;
  estudiantes: Datos[] = [
    { nombre: 'SARA', promedio: 10 },
    { nombre: 'DIEGO', promedio: 9.5 },
    { nombre: 'LAURA', promedio: 8.4 },
    { nombre: 'LUIS', promedio: 7.3 },
    { nombre: 'BRUNO', promedio: 9 }
  ];

  constructor(){
    console.log('Soy el contructor, listo atributos inicializados') ;
    console.log(this.estudiantes.map(estudiante => estudiante.nombre));
  }

  ngOnInit() {
      console.log('Soy el ngOnInit en este momento el componente ha cargado ') ;
      //foco en la captura del nombre
      document.getElementById('exampleInput1')?.focus();
  }

  agregarDatos():void {
    //objeto local
    let aux: Datos = {
      nombre: this.nombre,
      promedio: this.promedio,
    };

    this.estudiantes.push(aux);
    console.log(this.estudiantes);
    this.borrarDatos();
    document.getElementById('exampleInput1')?.focus();
  }

  borrarDatos():void {
    this.nombre = '';
    this.promedio = 0;
  }

  eliminarRegistro(nombre:any, evento:any):void {
    //localiza el nombre y devuelve el indice del arreglo donde esta
    let indice = this.estudiantes.findIndex((p) => p.nombre === nombre);
    this.estudiantes.splice(indice, 1);

    alert('Estudiante ' + nombre + ' eliminando.\nEvento capturado:' + evento.type + '.'    );
  }
}

interface Datos {
  nombre: string;
  promedio: number;
}