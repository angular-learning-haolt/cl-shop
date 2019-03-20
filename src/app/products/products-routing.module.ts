import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';

const productsRoutes: Routes = [
	{ 
		path: '',
		component: ProductListComponent
	},
	// { path: 'product/:id', component: HeroDetailComponent, data: { animation: 'product' } }

];

@NgModule({
	imports: [RouterModule.forChild(productsRoutes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule { }
