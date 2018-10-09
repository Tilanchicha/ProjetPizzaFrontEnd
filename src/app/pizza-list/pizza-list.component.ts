import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  @Input() pizza:Pizza
  
  pizzaParent: Array<Pizza> = []
  
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.listPizza().subscribe( pizza => this.pizzaParent = pizzas)
  }

}
