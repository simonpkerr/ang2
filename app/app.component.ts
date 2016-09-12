import { Component } from '@angular/core';
// import { CustomerComponent } from './customer/customer.component';

@Component({
    moduleId: module.id,
    selector: 'my-app', //a css-selector, anything you can select things by
    templateUrl: 'app.component.html'
})
export class AppComponent {
  // [] means property binding - uni-directional from component to template
  // () means event binding - from DOM to component
  title = 'Customer app';
  userName = 'Simon';
  colour = 'blue';
  


  changeColour () {
    this.colour = this.colour === 'blue' ? 'red' : 'blue';
  }
}

