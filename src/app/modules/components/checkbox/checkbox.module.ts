import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckBOxComponent } from './checkbox.component';

@NgModule({
  exports: [CheckBOxComponent],
  declarations: [
    CheckBOxComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
})
export class CheckBoxModule { }
