import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutInfomationComponent } from './checkout-infomation/checkout-infomation.component';
import { CheckoutNoticeComponent } from './checkout-notice/checkout-notice.component';

const checkoutRoutes: Routes = [
	{
    	path: '',
    	component: CheckoutComponent,
    	children: [
			// { 
			// 	path: '', 
			// 	component: CheckoutComponent 
			// },
			{ 
				path: 'notice', 
				component: CheckoutNoticeComponent 
			}
	    ]
	}
];

@NgModule({
	imports: [RouterModule.forChild(checkoutRoutes)],
	exports: [RouterModule]
})
export class CheckoutRoutingModule { }
