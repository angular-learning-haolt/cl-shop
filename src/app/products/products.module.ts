import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule }   from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
	declarations: [
		ProductListComponent
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		FormsModule
	]
})
export class ProductsModule { }
