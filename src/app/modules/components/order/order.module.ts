import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '../button/button.module';
import { HeaderModule } from '../header/header.module';
import { InputModule } from '../input/input.module';
import { TabsComponent } from '../tabs/tabs.component';
import { OrderCardModule } from './components/order-cards-car/order-card.module';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { OrderFilterComponent } from './components/order-filter/order-filter.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderContainersComponent } from './containers/order-containers.component';

@NgModule({
  exports: [OrderContainersComponent, TabsComponent, OrderFormComponent, OrderConfirmationComponent, OrderFilterComponent],
  declarations: [
    OrderContainersComponent,
    TabsComponent,
    OrderFormComponent,
    OrderConfirmationComponent,
    OrderFilterComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HeaderModule,
    InputModule,
    OrderCardModule
  ],
  providers: [],
})
export class OrderModule { }
