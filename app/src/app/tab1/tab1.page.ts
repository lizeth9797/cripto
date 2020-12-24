import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpClient) {}

  criptomonedas: any = [];

  runHttp(){
    this.http.get('https://api.bitso.com/v3/available_books/')
      .subscribe(data=> {
        console.log(data);
        this.criptomonedas = data;
      })
  }

}
