import { Component, OnInit } from '@angular/core';
import { CartService } from './../../cart/cart.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cart-list',
	templateUrl: './cart-list.component.html',
	styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

	public inCartProducts : any[];
	constructor(
		public cartService: CartService,
		public routerService : Router
	) { }

	ngOnInit() {
		this.getInCartProducts();
	}

	getInCartProducts() {
		this.inCartProducts = this.cartService.getAllInCartProducts();
	}

	changeQuantity(product, val) {
		switch (val) {
			case -1:
				product.quantity = product.quantity !== 0 ? product.quantity - 1 : 0;
				break;
			case 1:
				product.quantity += 1;
				break;
		}
		localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
		// this.onCountSummary(this.inCartProducts);
	}

	onBackToProducts() {
		this.routerService.navigate(['']);
	}

	onCheckout() {
		if (this.inCartProducts.length !== 0) {
			// console.log(this.inCartProducts);
			this.routerService.navigate(['checkout']);
		}
		else {
			alert('Please choose any products ^^')
		}
	}
}
