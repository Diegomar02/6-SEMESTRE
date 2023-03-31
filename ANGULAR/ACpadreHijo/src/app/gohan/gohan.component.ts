import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gohan',
  template: `
    <div class="gohanComp">
      <!-- <p>Gohan ahora puede usar el {{kamehamehaGohan}} <p> -->
      <button 
        type="button" 
        (click)="genkidamaAlerta(true)"
      >Hacer genkidama</button>
    </div>
  `,
  styleUrls: ['./gohan.component.css']
})
export class GohanComponent implements OnInit {
  @Input() kamehamehaGohan: string;
  @Output() energiaGohan = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  genkidamaAlerta(msg: boolean){
    this.energiaGohan.emit(msg)
    console.log(msg);
  }

}