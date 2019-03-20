import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { CheckoutNoticeComponent } from './checkout-notice/checkout-notice.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutInfomationComponent } from './checkout-infomation/checkout-infomation.component';
import { CheckoutProductsComponent } from './checkout-products/checkout-products.component';

@NgModule({
	declarations: [
		CheckoutNoticeComponent, 
		CheckoutComponent, 
		CheckoutInfomationComponent, 
		CheckoutProductsComponent
	],
	imports: [
		CommonModule,
		CheckoutRoutingModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class CheckoutModule { }
