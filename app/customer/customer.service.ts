import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustomerService {
  constructor(private _http: Http) { }
  
  getCustomersAsPromise() {
    return this._http.get('app/test/customers.json')
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err) => { return err });
    
  }

  getCustomersAsObservable() {
    return this._http.get('app/test/customers.json')
      .map((response: Response) => response.json())
      .catch(this._handleError);
    
  }

  _handleError (err: any) {
    console.log(err);
    // throw err;
    return Observable.throw(err);
  }
}

