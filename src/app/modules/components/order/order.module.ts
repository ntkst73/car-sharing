import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '../button/button.module';
import { HeaderModule } from '../header/header.module';
import { TabsComponent } from '../tabs/tabs.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderContainersComponent } from './containers/order-containers.component';





@NgModule({
  exports: [OrderContainersComponent, TabsComponent, OrderFormComponent, OrderConfirmationComponent],
  declarations: [
    OrderContainersComponent,
    TabsComponent,
    OrderFormComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HeaderModule
  ],
  providers: [],
})
export class OrderModule { }
