import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-containers',
  templateUrl: './order-containers.component.html',
  styleUrls: ['./order-containers.component.scss']
})
export class OrderContainersComponent {

  items = [
    {
      id: 'models',
      label: 'Все модели',
      name: 'order-model'
    },
    {
      id: 'economy',
      label: 'Эконом',
      name: 'order-model'
    },
    {
      id: '4',
      label: 'premium',
      name: 'order-model'
    }
  ]
  constructor(private router: Router) {}

  routeIsActive(routePath: string) {
    return this.router.url == routePath;
  }
}
