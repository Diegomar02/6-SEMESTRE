import { Component } from '@angular/core';
import { CalculosService } from './calculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyAngularNode';

  lado: number=0;
  area: number=0;
  perimetro: number=0;

  constructor(private calculos: CalculosService) { }

  enviar(): void {
    console.log(this.lado);
    const urapi = `http://localhost:3000/calculos/${this.lado}`;
    this.calculos.getJSON(urapi).subscribe((data: any) => {
      this.area=data.area;
      console.log(data);
      //this.area = data['area'];
      this.perimetro = data['perimetro'];
    });
  }
}
