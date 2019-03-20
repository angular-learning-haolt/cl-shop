import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-checkout-notice',
	templateUrl: './checkout-notice.component.html',
	styleUrls: ['./checkout-notice.component.css']
})
export class CheckoutNoticeComponent implements OnInit {

	constructor(
		public routerService : Router
	) { }

	ngOnInit() {
	}
	onBackToProducts() {
		this.routerService.navigate(['']);
	}

	onSeeHistory() {
		this.routerService.navigate(['order-history']);
	}
}
