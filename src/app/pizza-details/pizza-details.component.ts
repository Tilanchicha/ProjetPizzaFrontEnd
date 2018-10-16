import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';

import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

public payPalConfig?: PayPalConfig;
  pizza: Pizza;
  constructor(private activateRoute: ActivatedRoute,private pizzaService: PizzaService) { }



  ngOnInit() {
      this.getPizza();

  }

  getPizza(){
      const id = +this.activateRoute.snapshot.paramMap.get('id');
      this.pizzaService.GetPizzaBYID(id).subscribe(pizza => this.pizza = pizza);
        this.initConfig();
    }


private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AeqbcQoWbvINKCvSZCt2DmiiLF2EdhcTCwYrJR1QUzsyl7zvzNHOjtQ88KREycDEkQwieIq-0_e-s_2Q'
      },
      button: {
        label: 'pay',
      },
      onPaymentComplete: (data, actions) => {
        console.log(data,actions);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      transactions: [{
        amount: {
          currency: 'EUR',
          total: 9
        }
      }]
    });
  }
}