import { Component, Input, OnInit } from '@angular/core';

interface ICard  {
  title: string
  price: string
  image: string
}

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {
  cards = [
    {
      image: '../../../../../../../assets/cars/car1.jpg',
      title: 'ELANTRA',
      price: '12 000 - 25 000 ₽'
    },
    {
      image: '../../../../../../../assets/cars/car2.jpg',
      title: 'i30 N',
      price: '10 000 - 32 000 ₽'
    },
    {
      image: '../../../../../../../assets/cars/car3.jpg',
      title: 'CRETA',
      price: '12 000 - 25 000 ₽'
    },
    {
      image: '../../../../../../../assets/cars/car4.jpg',
      title: 'SONATA',
      price: '10 000 - 32 000 ₽'
    }
  ]
  
  @Input() card: ICard;

  ngOnInit(): void {
    console.log(this.card);
  }

}
