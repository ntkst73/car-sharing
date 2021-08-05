import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckBOxComponent {
  @Input() label: string = '';
  @Input() id: string | number = '';
  @Input() checked: boolean;
}
