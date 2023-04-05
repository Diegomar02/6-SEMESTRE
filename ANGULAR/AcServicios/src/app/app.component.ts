import { Component } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicio1';

  constructor(public clientesService: ClientesService) { }

  ngOnInit() {
    console.log(this.clientesService);
  }
}
