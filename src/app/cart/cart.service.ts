import { Injectable } from '@angular/core';
import { Product } from './../products/product.class';
import {Observable, of, from} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	public inCartProducts : any[] = [];

	constructor() { }

	saveToLocalStorage() {
		localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
	}

	addProductToCart(product) {
		if (localStorage.getItem('inCartProducts') === null) {
			localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
		}
		else {
			this.inCartProducts = JSON.parse(localStorage.getItem('inCartProducts'));
		}

		if (product) {

			if (this.inCartProducts.length === 0) {
				let inCartProduct = {...product};
				inCartProduct.quantity = 1;
				this.inCartProducts.push(inCartProduct);
				localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
			}
			else {
				let index = this.inCartProducts.findIndex((item)=> item.id === product.id);
				if (index === -1) {
					let inCartProduct = {...product};
					inCartProduct.quantity = 1;
					this.inCartProducts.push(inCartProduct);
					localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
				}
				else {
					this.inCartProducts[index].quantity += 1;
					localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
				}
			}
		}
	}

	getAllInCartProducts() {
		if (localStorage.getItem('inCartProducts') === null) {
			localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
		}
		else {
			this.inCartProducts = JSON.parse(localStorage.getItem('inCartProducts'));
		}
	    return this.inCartProducts;
	}
}
