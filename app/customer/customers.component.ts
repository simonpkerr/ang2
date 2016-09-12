import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component ({
  moduleId: module.id,
  selector: 'app-customers',
  // template: `
  //   {{ customer.id }} - {{ customer.name }}
  // `
  templateUrl: 'customers.component.html',
  // all providers available downward to child components. 
  // so the best idea is to put providers at the lowest possible level
  providers: [
    CustomerService
  ]
})
export class CustomersComponent implements OnInit {
  customers: any[];

  // typescript sugar, tells component to create a private variable
  // of type CustomerService
  constructor (private _customerService : CustomerService) {
  }

  // life-cycle function
  ngOnInit() {
    this.customers = this._customerService.getCustomers();
  }
}
