import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainLeftComponent } from './components/main-left-block/main-left-block.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';

@NgModule({
  exports: [MainLeftComponent, MainSliderComponent],
  declarations: [
    MainLeftComponent,
    MainSliderComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
})
export class MainModule { }
