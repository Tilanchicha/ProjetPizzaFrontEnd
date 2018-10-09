import { Component, OnInit, Input} from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

@Input() pizza:Pizza
/*pizza : Pizza = {name: "marguarita", price: 12, url: "http://delivery-pizza.fr/images/livraison-pizza-maubeuge.jpg"};*/

  constructor() { }

  ngOnInit() {
  }


}
