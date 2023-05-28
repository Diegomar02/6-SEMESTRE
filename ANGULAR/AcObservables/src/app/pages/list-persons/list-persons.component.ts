import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from 'src/app/models/person.model';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {
  _persons!: Observable<PersonModel[]>;

  constructor(private personsService: PersonsService) {
    this._persons = this.personsService._persons;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  fnEditPerson(person: PersonModel) {
    this.personsService.fnLoadPerson(person);
  }

  fnDeletePerson(person: PersonModel) {
    this.personsService.fnDeletePerson(person);
  }

  fnNewPerson() {
    this.personsService.fnResetLoadPerson();
  }



}

