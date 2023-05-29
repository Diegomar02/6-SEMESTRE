import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QR';

  Vlinks=["https://www.nike.com/mx/","https://angular.io","https://aulavirtual.uaa.mx","https://www.airbnb.mx/?_set_bev_on_new_domain=1685370773_MDhiODVhMmQwNGM1","https://chat.openai.com/?model=text-davinci-002-render-sha"];
  
  numero=Math.floor(Math.random()*5);
  link:string=this.Vlinks[this.numero];

  url:SafeUrl=''

  onCodeChange(url:SafeUrl){
    console.log(url);
    this.url=url;
  }
}
