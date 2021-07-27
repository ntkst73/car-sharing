import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonModule } from './modules/components/button/button.module';
import { HeaderModule } from './modules/components/header/header.module';
import { InputModule } from './modules/components/input/input.module';

import { MainModule } from './modules/components/main/main.module';
import { MenuModule } from './modules/components/menu/menu.module';
import { OrderModule } from './modules/components/order/order.module';
import { MainPageComponent } from './modules/pages/main/main.component';
import { OrderlocationComponent } from './modules/pages/order/components/order-location/order-location.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    OrderlocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    MenuModule,
    OrderModule,
    CommonModule,
    ButtonModule,
    HeaderModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
