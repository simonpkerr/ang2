import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
  constructor() { }

  getCustomers() {
    return [
      { id: 1, name: 'Si' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Phil' },
      { id: 4, name: 'Mike' },
      { id: 5, name: 'Mark' },
      { id: 6, name: 'Pete' }
    ];
  }
}

