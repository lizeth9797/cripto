import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  criptomonedas: any = [];
  number: string;

  constructor(private http: HttpClient) {}


  runHttp(){
    this.http.get('https://api.bitso.com/v3/available_books/')
      .subscribe(data=> {
        this.criptomonedas = data as string[];
        console.log(data);
      })
  }


  formula(){
    
    // this.number=this.number+100;
    console.log(this.number);
  }


}
 