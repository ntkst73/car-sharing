import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/pages/main/main.component';
import { OrderlocationComponent } from './modules/pages/order/components/order-location/order-location.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
      path: 'order-location',
      component:  OrderlocationComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
