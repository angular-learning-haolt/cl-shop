import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from './../checkout.service';

@Component({
	selector: 'app-checkout-products',
	templateUrl: './checkout-products.component.html',
	styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

	constructor(
		public routerService : Router,
		public checkoutService : CheckoutService,
	) { }

	public checkoutProducts : any[];

	ngOnInit() {
		this.checkoutProducts = this.checkoutService.getAllCheckoutProducts();
	}

}
