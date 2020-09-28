import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  orders = [
              {
                  id: Math.random().toString(36).slice(2,11),
                  customerName: 'Neeraj',
                  date: '27-Sep-2020',
                  mode: 'Self Pickup'
              },
              {
                  id: Math.random().toString(36).slice(2,11),
                  customerName: 'Munish',
                  date: '21-Sep-2020',
                  mode: 'Home Delivery'
              },
              {
                  id: Math.random().toString(36).slice(2,11),
                  customerName: 'Priya',
                  date: '21-Aug-2020',
                  mode: 'Home Delivery'
              },
              {
                  id: Math.random().toString(36).slice(2,11),
                  customerName: 'Ramesh',
                  date: '21-Jun-2020',
                  mode: 'Self Pickup'
              }
          ];

}
