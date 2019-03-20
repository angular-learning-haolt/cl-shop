import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
	{
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
	{
		path:'products',
		loadChildren:'./products/products.module#ProductsModule'
	},
	{
		path:'cart',
		component: CartListComponent
	},
	{
		path:'checkout',
		loadChildren:'./checkout/checkout.module#CheckoutModule'
	},
	{
		path:'order-history',
		component: OrderHistoryComponent
	},
	{
		path:'**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
