import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule { }
