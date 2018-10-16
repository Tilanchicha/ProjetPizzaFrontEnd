import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxPayPalModule } from 'ngx-paypal';
import {ApiModule} from './REST';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    PizzaDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPayPalModule,
    AppRoutingModule,
    ApiModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

