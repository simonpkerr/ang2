import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent }  from './app.component';
// import { CustomerComponent } from './customer/customer.component';
// import { CustomersComponent } from './customer/customers.component';

// use a barrel to grab any or all components from a module
// looks for an index file to grab the components
import { CustomerComponent, CustomerService, CustomersComponent } from './customer';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
