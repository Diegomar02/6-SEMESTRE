import { Component } from '@angular/core';

@Component({
  selector: 'app-divisor',
  templateUrl: './divisor.component.html',
  styleUrls: ['./divisor.component.css']
})
export class DivisorComponent {
  rc: number=0;
  r1: number=0;
  r2: number=0;
  re: number=0;
  vcc: number=0;
  beta: number=0;
  result1: any=0;
  result2: any=0;
  calculate1() {
    const rth= (this.r1*this.r2)/(this.r1+this.r2); // Calcula la resistencia de thevenin
    const vth= (this.vcc*this.r2)/(this.r1+this.r2); //Caclula el voltaje de thevenin
    const ib = (vth - 0.7) / (rth+(this.beta+1)*(this.re)); // Calcula la corriente IB
    const ic = ib*this.beta; // Suponemos polarización fija, entonces IC = IB*beta
    const ie = ic + ib; // Calcula la corriente IE

    const vr1 = ib*this.r1; // Calcula el voltaje R1
    const vr2 = ib*this.r2; //Calcula el voltaje de R2
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
      vr1: vr1.toFixed(10),
      vr2: vr2.toFixed(10),
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
    const r1 = 0; // Calcula el valor de Rb
    const r2= 0;
    const rc = this.vrc/ this.ic; // Calcula el valor de Rc
    const re = this.vre / this.ie; //Calcula el valor de Re
    this.result2 = {
      r1: r1.toFixed(5),
      r2: r2.toFixed(5),
      rc: rc.toFixed(5),
      re: re.toFixed(5)
    };
  }
}
