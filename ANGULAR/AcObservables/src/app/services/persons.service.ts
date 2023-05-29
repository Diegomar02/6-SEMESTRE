import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonModel } from '../models/person.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {
    aux:PersonModel={
    _uid:"",
    _name: "",
    _lastname: "",
    _contact: ""
  }

  private $persons:BehaviorSubject<PersonModel[]> = new
    BehaviorSubject<PersonModel[]>([]);//Igual a arreglo vacio
    _persons:Observable<PersonModel[]> = this.$persons.asObservable();//_persons sera un observable del array
  private $person:BehaviorSubject<PersonModel> = new
    BehaviorSubject<PersonModel>(this.aux);//igual a nulo
    _person:Observable<PersonModel> = this.$person.asObservable();//_person sera un observable de un solo objeto

  constructor() {
    let data:any = localStorage.getItem('data'); //recuperamos datos del localStorage
    if(data){
      this.$persons.next(JSON.parse(data));//next nos permite mandar el cambio atodos quien este subscrito a nuestro observable
    }
  }

  fnAddPerson(person:PersonModel):void{
    let aux:PersonModel[] = this.$persons.getValue();
    person._uid = uuidv4();
    aux.push(person);
    this.$persons.next(aux);/*mandamos actualizacion a todos los subscritos*/
    this.fnSaveLocalStorage();
  }
  
  fnSaveLocalStorage(){
    let aux:PersonModel[] = this.$persons.getValue();
    let strAux:string = JSON.stringify(aux);
    localStorage.setItem('data',strAux)
  }

  fnLoadPerson(person:PersonModel):void{
    this.$person.next(person);
  }

  fnEditPerson(person:PersonModel):void{

    console.log(person)
    let aux:PersonModel[] = this.$persons.getValue();
    let indexDelete:number = -1;
    aux.forEach((savePerson,index)=>{

     if(savePerson._uid == person._uid){
      indexDelete = index;
    }
    })

    if(indexDelete!=-1){
      aux[indexDelete] = person;
    }
    this.$persons.next(aux)
    this.fnSaveLocalStorage();
  }

  fnResetLoadPerson():void{
    this.$person.next(this.aux);
  }

  fnDeletePerson(person:PersonModel):void{
    let aux:PersonModel[] = this.$persons.getValue();
    let indexDelete:number = aux.indexOf(person);
    if(indexDelete!=-1){//Si es difeerente de -1 encontro el objeto en el array
      /*Las siguientes lineas de codigo son para validar si el usuario que vamos
      a eliminar ESTA en este momento en EDICION, porque de ser asi, debemos
      borrar sus datos del formulario, no seria una buena practica, proceder
      a la eliminacion dejando los datos ahi, porque alguien podria pensar que
      ese usuario sigue existiendo y ya lo vamos a borrar*/
      let loadPerson:PersonModel = this.$person.getValue();
      if(loadPerson){
        if(loadPerson._uid == person._uid){/*el que esta en edicion es el mismo que voy a eliminar????*/
          this.fnResetLoadPerson();//mandamos aviso al observable para que notifique a quien tenga subscripcion
       }
      }
      aux.splice(indexDelete,1);//borramos el registro
    }
    this.$persons.next(aux)
    this.fnSaveLocalStorage();
  }
}