import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { MenuContainerComponent } from './containers/menu-container.component';




@NgModule({
  exports: [BurgerMenuComponent, MenuContainerComponent],
  declarations: [
    BurgerMenuComponent,
    MenuContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class MenuModule { }
