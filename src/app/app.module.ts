import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CartQuantityComponent } from './cart/cart-quantity/cart-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    CartListComponent,
    OrderHistoryComponent,
    CartQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
