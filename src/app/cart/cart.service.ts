import { Injectable } from '@angular/core';
import { Product } from './../products/product.class';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	public inCartProducts : any[] = [];
	public productsHaoTestObservible : BehaviorSubject<any[] | [] >;
	public cardSbj : BehaviorSubject<any[] | null >;

	constructor() {
		this.cardSbj = new BehaviorSubject(null);
		this.productsHaoTestObservible = new BehaviorSubject([]);
	}

	addCard() {
		this.cardSbj.next(['Observable is so difficult :(( . This is example getCart addCart Mr.Dan guided me. 22/03. Hic :']);
	}

	getCart() {
		return this.cardSbj;
	}

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


	addProductsHaoTestObservible(product) {
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
		this.productsHaoTestObservible.next(this.inCartProducts);
	}
	getAllProductsHaoTestObservible() {
		if (localStorage.getItem('inCartProducts') === null) {
			localStorage.setItem('inCartProducts', JSON.stringify(this.inCartProducts));
		}
		else {
			this.inCartProducts = JSON.parse(localStorage.getItem('inCartProducts'));
		}
	    return this.productsHaoTestObservible;
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
