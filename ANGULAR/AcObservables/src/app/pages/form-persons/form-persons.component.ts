import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';
import { PersonModel } from 'src/app/models/person.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-form-persons',
  templateUrl: './form-persons.component.html',
  styleUrls: ['./form-persons.component.css']
})

export class FormPersonsComponent {

  editMode: boolean=false;
  sub_person!:Subscription;
  name: string="";
  lastname: string="";
  contact: string="";
  uid: string="";

  constructor(private personsService:PersonsService){ }

  ngOnInit(): void{
    this.fnSubscribeToPerson();
  }

  ngOnDestroy(){
    if(this.sub_person){
      this.sub_person.unsubscribe();
    }
  }

  fnSubscribeToPerson(){
    this.sub_person = this.personsService._person.subscribe(person=>{
      if(person){
      //Si el objeto tiene datos es porque se quieren editar
      this.fnLoadPerson(person);
      }else{
        this.editMode = false;
        this.fnCleanForm();
      }
    });
  }

  fnValidData():boolean{
    let valid:boolean = true;
    if(!this.name){
      console.log('Falta nombre')
      valid = false;
    }
    if(!this.lastname){
      console.log('Falta apellido')
      valid = false;
    }
    if(!this.contact){
      console.log('Falta contacto')
      valid = false;
    }
    return valid;
  }
   fnCleanForm(){
    this.name = '';
    this.lastname = '';
    this.contact = '';
    this.uid = ''
  }
  
  fnSave():void{
    
    if(!this.fnValidData()){
      return;
    }
    let person:PersonModel = {
      _name: this.name,
      _lastname: this.lastname,
      _contact: this.contact
    } as PersonModel;
    if(this.editMode){
      //edicion
      person._uid = this.uid
      this.personsService.fnEditPerson(person);     
    }else{
      this.personsService.fnAddPerson(person);
      this.fnCleanForm();
    }
  }

  fnLoadPerson(person:PersonModel){
    this.editMode = true;     
    this.name = person._name;
    this.lastname = person._lastname;
    this.contact = person._contact;
    this.uid = person._uid;
  }

}
