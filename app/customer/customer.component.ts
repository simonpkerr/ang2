import { Component, Input, OnInit } from '@angular/core';

@Component ({
  selector: 'app-customer',
  // template: `
  //   {{ customer.id }} - {{ customer.name }}
  // `
  templateUrl: './app/customer/customer.component.html'
})
export class CustomerComponent implements OnInit {
  // defines the type
  @Input() customer: { id: number, name: string};

  constructor () {}

  // life-cycle function
  ngOnInit() {
    // console.log(this.customer);
  }
}
