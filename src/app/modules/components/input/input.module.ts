import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from './input.component';


@NgModule({
  exports: [InputComponent],
  declarations: [
    InputComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
})
export class InputModule {
 
}
