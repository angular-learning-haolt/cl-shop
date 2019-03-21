import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { CartService } from './../../cart/cart.service';
import { Product } from './../product.class';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	public products : Product[];
	public categories: String[];
	public name : string = '';
	public category : string = 'all';
	public price : number;

	constructor(
		public productService: ProductService,
		public cartService: CartService
	) { }

	ngOnInit() {
		this.products = this.productService.getAllProducts();
		this.categories = this.productService.getAllCategories();
	}

	onSearch() {
		// console.log(this.name, this.category, this.price);
		this.products = this.productService.getAllProducts(this.products, this.name, this.category, this.price);
	}

	onAddToCart(product) {
		// this.cartService.addProductToCart(product);
		this.cartService.addCard();
	}
}
