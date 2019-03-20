import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartQuantityComponent } from './cart-quantity/cart-quantity.component';

@NgModule({
	declarations: [
		CartQuantityComponent, 
		CartListComponent
	],
	imports: [
		CommonModule
	]
})
export class CartModule { }
