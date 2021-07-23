import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from '../button/button.component';
import { MainLeftComponent } from './components/main-left-block/main-left-block.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';

@NgModule({
  exports: [MainLeftComponent, MainSliderComponent, ButtonComponent],
  declarations: [
    MainLeftComponent,
    MainSliderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
})
export class MainModule { }
