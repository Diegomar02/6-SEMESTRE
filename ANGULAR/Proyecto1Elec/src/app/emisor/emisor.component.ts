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
  vce: number=0;

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
}
