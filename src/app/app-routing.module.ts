import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/pages/main/main.component';
import { OrderlocationComponent } from './modules/pages/order/components/order-location/order-location.component';
import { OrderModelComponent } from './modules/pages/order/components/order-model/order-model.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
      path: 'order-location',
      component:  OrderlocationComponent
    },
    {
      path: 'order-model',
      component:  OrderModelComponent
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
