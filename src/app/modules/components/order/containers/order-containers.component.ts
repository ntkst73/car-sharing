import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-containers',
  templateUrl: './order-containers.component.html',
  styleUrls: ['./order-containers.component.scss']
})
export class OrderContainersComponent {
  constructor(private router: Router) {}

  routeIsActive(routePath: string) {
    return this.router.url == routePath;
  }
}
