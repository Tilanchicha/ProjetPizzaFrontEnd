import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Pizza } from './pizza';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  
  URL = "https://lpa2sgadot.herokuapp.com";

  constructor(private httpClient: HttpClient) { 
     
  }

  listPizzas():Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(this.URL + '/pizzas.json');
  }

  GetPizzaBYID(idPizza: number): Observable<Pizza> {
    return this.httpClient.get<Pizza>(this.URL + '/pizzas/' + idPizza + '.json');
  }
  
}