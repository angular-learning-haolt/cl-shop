import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutBill } from './../checkout/checkout-bill.class';

@Component({
	selector: 'app-order-history',
	templateUrl: './order-history.component.html',
	styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

	public checkoutBills: CheckoutBill[];
	constructor(
		public routerService: Router
	) {}

	ngOnInit() {
		this.getAllCheckoutBills();
	}

	getAllCheckoutBills() {
		if (localStorage.getItem('checkoutBills') === null) {
			localStorage.setItem('checkoutBills', JSON.stringify([]));
		}
		else {
			this.checkoutBills = JSON.parse(localStorage.getItem('checkoutBills'));
		}
	}
}
