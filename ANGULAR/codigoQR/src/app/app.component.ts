import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codigoQR';

  num = Math.floor(Math.random() * 5);
  palabra = ["Peter Parker","Diego","Fatima","Betsy","Andrew"];
  valor: string = this.palabra[this.num];
}
