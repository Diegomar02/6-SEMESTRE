import { Component } from '@angular/core';

@Component({
  selector: 'goku',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <gohan
            [kamehamehaGohan]="kamehamehaGoku" 
            (energiaGohan)="genkidamaLista($event)">
          </gohan>
          <h1>Goku Component</h1>
          <img src="{{genkidamaImg}}" alt="">
        </div>
      </div>
    </div>
    
  `,
  styleUrls: ['./goku.component.css']
})
export class GokuComponent {
  genkidama: boolean = false;
  genkidamaImg: string;
  kamehamehaGoku: string = "KAME HAME HA!"

  constructor() { }

  genkidamaLista(confirmation: boolean){
    this.genkidama = confirmation;
    console.log(this.genkidama);

    //hacer genkidama si es true
    if(this.genkidama){
      this.genkidamaImg = 'https://vignette.wikia.nocookie.net/dragonball/images/6/6c/Goku_lanzando_la_Genkidama.png/revision/latest?cb=20130105194140&path-prefix=es'
    }
  }

}