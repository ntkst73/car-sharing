import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent {
  mod: string = 'disable'

  constructor(private router: Router) {}

  routeIsActive(routePath: string) {
    return this.router.url == routePath;
  }
}
