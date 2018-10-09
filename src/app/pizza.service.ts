import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  listPizza(): any {
    throw new Error("Method not implemented.");
  }

  URL = "https://lpa2sgadot.herokuapp.com"

  constructor(private httpclient: HttpClient) { }

  listePizza():Observable<Pizza[]>{
    return this.httpclient.get<Pizza[]>(this.URL + '/pizza.json')
  }

}
