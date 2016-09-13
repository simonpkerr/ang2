import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent }  from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customer/customers.component';

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
