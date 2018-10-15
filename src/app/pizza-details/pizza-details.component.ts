import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

  pizza: Pizza;
  constructor(private activateRoute: ActivatedRoute,private pizzaService: PizzaService) { }

  ngOnInit() {
      this.getPizza();
  }

  getPizza(){
      const id = +this.activateRoute.snapshot.paramMap.get('id');
      this.pizzaService.GetPizzaBYID(id)
          .subscribe(pizza => this.pizza = pizza);
    }
}
