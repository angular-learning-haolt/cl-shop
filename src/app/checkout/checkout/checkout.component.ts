import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from './../checkout.service';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

	constructor(
		public routerService : Router,
		public checkoutService : CheckoutService,
	) { }

	public checkoutProducts : any[];

	ngOnInit() {
		this.checkoutProducts = this.checkoutService.getAllCheckoutProducts();
	}

}
