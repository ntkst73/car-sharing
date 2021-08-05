import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  fullTank = 'fullTank'
  babyArmchair = 'babyArmchair'
  rightHandDrive = 'rightHandDrive'

  icon = false;
  style = [
    {
      name: 'style',
      label: 'Любой',
      id: 'any',
      checked: false
    },
    {
      name: 'style',
      label: 'Красный',
      id: 'red',
      checked: false
    },
    {
      name: 'style',
      label: 'Голубой',
      id: 'lightblue',
      checked: true
    }
  ]
  tarif = [
    {
      name: 'time',
      label: 'Поминутно, 7₽/мин',
      id: 'minutes',
      checked: false
    },
    {
      name: 'time',
      label: 'На сутки, 1999 ₽/сутки',
      id: 'days',
      checked: true
    }
  ]

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
