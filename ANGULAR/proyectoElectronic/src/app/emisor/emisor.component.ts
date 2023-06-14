import { Component } from '@angular/core';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent {
  rc: number=0;
  rb: number=0;
  re: number=0;
  vcc: number=0;
  beta: number=0;
  result1: any=0;
  result2: any=0;
  icmax: number= 150;
  vcemax: number= 10;
  vce: number = 0;
  BETA: number=100;
  transistor: string= "mps2222"
  onTransistorChange() {
    console.log('Transistor seleccionado:', this.transistor);
    switch (this.transistor) {
      case 'mps2222':
        this.BETA = 100;
        this.icmax = 150;
        this.vcemax = 10;
        break;
      case 'tip41':
        this.BETA = 80; // 40 a 120 = 80 promedio
        this.icmax = 6000;
        this.vcemax = 5;
        break;
      case 'bc547':
        this.BETA = 455; // 110 a 800 = 455 promedio
        this.icmax = 100;
        this.vcemax = 45;
        break;
    }
    this.comprobar();
  
  }
  calculate1() {
    const ib = (this.vcc - 0.7) / (this.rb+(this.beta+1)*this.re); // Calcula la corriente IB
    const ic = ib*this.beta; // Suponemos polarización fija, entonces IC = IB*beta
    const ie = ic + ib; // Calcula la corriente IE

    const vrb = ib*this.rb; // Calcula el voltaje VRB
    const vrc = ic * this.rc; // Calcula el voltaje VRC
    const vre = ie * this.re; //Calcula el voltaje VRE
    const vce = this.vcc - vrc - vre; // Calcula el voltaje VCE
    const vb = 0.7 + vre; // Calcula el voltaje VB
    const ve = vre; // Calcula el voltaje VE
    const vc = vce + vre; // Calcula el voltaje VC

    this.result1 = {
      ib: ib.toFixed(10),
      ic: ic.toFixed(10),
      ie: ie.toFixed(10),
      vrb: vrb.toFixed(10),
      vre: vre.toFixed(10),
      vrc: vrc.toFixed(10),
      vc: vc.toFixed(10),
      vb: vb.toFixed(10),
      ve: ve.toFixed(10),
      vce: vce.toFixed(10)
    };
  }
  ib: number=0;
  ic: number=0;
  ie: number=0;
  vrb: number=0;
  vrc: number=0;
  vre: number=0;
  

  calculate2() {
    const rb = this.vrb / this.ib; // Calcula el valor de Rb
    const rc = this.vrc/ this.ic; // Calcula el valor de Rc
    const re = this.vre / this.ie; //Calcula el valor de Re
    this.result2 = {
      rb: rb.toFixed(5),
      rc: rc.toFixed(5),
      re: re.toFixed(5)
    };
  }

comprobar() {
  const icmax = 10; // Límite máximo de Corriente Colector (ejemplo)
  const vcemax = 5; // Límite máximo de Voltaje Colector-Emisor (ejemplo)

  if (this.ic >= icmax && this.vce >= vcemax) {
    alert(
      "La Corriente Colector (IC) y el Voltaje Colector-Emisor (VCE) son mayores a los límites del transistor seleccionado"
    );
  } else if (this.ic >= icmax) {
    alert(
      "La Corriente Colector (IC) es mayor a los límites del transistor seleccionado. icmax: " +
        icmax +
        ", IC: " +
        this.ic
    );
  } else if (this.vce >= vcemax) {
    alert(
      "El Voltaje Colector-Emisor (vce) es mayor al límite del transistor seleccionado"
    );
  } else {
    
  }
}
}