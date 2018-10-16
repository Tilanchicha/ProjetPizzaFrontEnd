import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PizzaDetailsComponent} from './pizza-details/pizza-details.component';
import {PizzaListComponent} from './pizza-list/pizza-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/pizza', pathMatch: 'full'},
  {path: 'pizza', component: PizzaListComponent},
  {path: 'pizza/:id', component: PizzaDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

