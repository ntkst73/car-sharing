import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from '../button/button.component';


@NgModule({
  exports: [ButtonComponent],
  declarations: [
    ButtonComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
})
export class ButtonModule { }
