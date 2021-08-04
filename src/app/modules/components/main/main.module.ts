import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '../button/button.module';
import { HeaderModule } from '../header/header.module';
import { MainLeftComponent } from './components/main-left-block/main-left-block.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { MainComponent } from './containers/main-container.component';

@NgModule({
  exports: [MainLeftComponent, MainSliderComponent, MainComponent],
  declarations: [
    MainLeftComponent,
    MainSliderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HeaderModule

  ],
  providers: [],
})
export class MainModule { }
