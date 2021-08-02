import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RadioComponent } from './radio.component';


@NgModule({
  exports: [RadioComponent],
  declarations: [
    RadioComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
})
export class RadioModule {

}
