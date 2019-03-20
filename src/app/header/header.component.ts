import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	pages: Array<{ title: string, route: string }>;
	constructor() { }

	ngOnInit() {
		this.pages = [
			{
				title: 'Products',
				route: 'products'
			},
			{
				title: 'Order History',
				route: 'order-history'
			}
			// {
			// 	title: 'Checkout',
			// 	route: 'checkout'
			// },
			// {
			// 	title: 'Checkout Notice',
			// 	route: 'checkout/notice'
			// }
		]
	}

}
