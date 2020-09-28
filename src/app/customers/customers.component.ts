import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {

  constructor() { }

  customers = [
    {name:'Neeraj', email: 'neeraj@gmail.com', phone: 1234567890, address: 'India'},
    {name:'Munish', email: 'munish@gmail.com', phone: 9876543210, address: 'India'},
    {name:'Rakesh', email: 'rakesh@gmail.com', phone: 9999888800, address: 'India'},
    {name:'Shradha', email: 'shradha@gmail.com', phone: 7777666600, address: 'India'},
  ]

  ngOnInit(): void {
  }

}