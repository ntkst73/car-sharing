import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderCardsCarComponent } from './containers/order-cards-car.component';




@NgModule({
  exports: [OrderCardComponent, OrderCardsCarComponent],
  declarations: [
    OrderCardsCarComponent,
    OrderCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class OrderCardModule { }
