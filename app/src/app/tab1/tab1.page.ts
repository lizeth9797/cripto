import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  criptomonedas: any = [];
  numero: number;
  resultado: number = 0;

  constructor(private http: HttpClient) {}


  runHttp(){
    this.http.get('https://demo5021231.mockable.io/')
      .subscribe(data=> {
        this.criptomonedas = data as string[];
        console.log(data);
      })
  }


  formula(){

    this.resultado=this.numero/459735;
    console.log(this.resultado);
  }


}
 