import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() typeInput: string = '';
  @Input() value: string = '';
  @Input() id: string = '';
  @Input() class: string = '';

  getValue(event) {
    console.log(event);
  }
}
