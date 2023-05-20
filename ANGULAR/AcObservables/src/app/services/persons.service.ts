import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; import { PersonModel } from '../models/person.model'
import { v4 as uuidv4 } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  aux: PersonModel = {
    _uid: "",
    _name: "",
    _lastname: "",
    _contact: "",
    _id: 0
  }
  private $persons: BehaviorSubject<PersonModel[]> = new BehaviorSubject<PersonModel[]>([]);//Igual a arreglo vacio
  _persons: Observable<PersonModel[]> = this.$persons.asObservable();//_persons sera un observable del array
  private $person: BehaviorSubject<PersonModel> = new BehaviorSubject<PersonModel>(this.aux);//igual a nulo
  _person: Observable<PersonModel> = this.$person.asObservable();//_person sera un observable de un solo objeto
  constructor() {
    let data: any = localStorage.getItem('data'); //recuperamos datos del
    localStorage
    if (data) {
      this.$persons.next(JSON.parse(data));//next nos permite mandar el cambio atodos quien este subscrito a nuestro observable
    }
  }
  fnAddPerson(person: PersonModel): void {
    let aux: PersonModel[] = this.$persons.getValue(); person._uid = uuidv4();
    aux.push(person);
    this.$persons.next(aux);/*mandamos actualizacion a todos los subscritos*/
    this.fnSaveLocalStorage();
  }
  fnSaveLocalStorage(){
    let aux: PersonModel[] = this.$persons.getValue(); let strAux: string = JSON.stringify(aux); localStorage.setItem('data', strAux)
  }
}



