import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CustomerService {
  constructor(private _http: Http) { }

  getCustomers() {
    return this._http.get('app/test/customers.json')
      .map((response: Response) => response.json());
    
  }
}

