import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CheckoutService {

	constructor() { }

	public checkoutProducts : any[];

	getAllCheckoutProducts() {
		this.checkoutProducts = JSON.parse(localStorage.getItem('inCartProducts'));
		return this.checkoutProducts;
	}
}
