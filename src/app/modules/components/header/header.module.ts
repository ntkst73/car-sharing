import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';



@NgModule({
  exports: [HeaderComponent],
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
})
export class HeaderModule { }
