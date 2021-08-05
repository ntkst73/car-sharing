import { Component, Input } from '@angular/core';

interface orderFilter {
  label: string;
  id: number | string;
  name: string;
  checked?: boolean;
}

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.component.html',
  styleUrls: ['./order-filter.component.scss']
})
export class OrderFilterComponent {
  item: orderFilter

  @Input() items: [];

}
