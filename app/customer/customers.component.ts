import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';

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
  customersObs: Observable<any[]>;
  customersPromise: Promise<any[]>;


  // typescript sugar, tells component to create a private variable
  // of type CustomerService
  constructor (private _customerService : CustomerService) {
  }

  // life-cycle function
  ngOnInit() {

    // promise without async pipe way
    this._customerService.getCustomersAsPromise()
      .then ((customers) => this.customers = customers)
      .catch((err) => console.log(err));

    // Promise way
    this.customersPromise = this._customerService.getCustomersAsPromise()
      .catch ((err) => { 
        console.log(err);
      });
    
    // rx Observable way
    this.customersObs = this._customerService.getCustomersAsObservable()
      .catch ((err) => { // this would also be caught if a 404 was produced
        console.log(err);
        return Observable.of(true); // eat the error
      });
  }
}
