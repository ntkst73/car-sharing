import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {

  icon = false;

  constructor(private router: Router) {}

  routeIsActive(routePath: string) {
    return this.router.url == routePath;
  }



  getValue(event) {
    let target = event.target.value;

    target != 0 ? this.icon = true : this.icon = false;
  };

  deleteValue(event) {

  }
}
