import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

  @Input() check: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() id: string = '';

  constructor() {}
}
