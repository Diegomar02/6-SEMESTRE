import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-form-persons',
  templateUrl: './form-persons.component.html',
  styleUrls: ['./form-persons.component.css']
})
export class FormPersonsComponent {

  editMode: boolean=false;

  id: number=0;
  name: string="";
  lastname: string="";
  contact: string="";
  uid: string="";

  constructor(private personsService:PersonsService){ }

  ngOnInit(): void{
  }

}
