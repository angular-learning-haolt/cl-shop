import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from './../cart.service';
import { Subscription, Observable } from 'rxjs';

@Component({
	selector: 'app-cart-quantity',
	templateUrl: './cart-quantity.component.html',
	styleUrls: ['./cart-quantity.component.css']
})
export class CartQuantityComponent implements OnInit, OnDestroy {


	public subscription : Subscription;
	public quantity : number = 0;
	public inCartProducts:Array<any>=[];

	constructor(
		public cartService : CartService
	) { }

	ngOnInit() {
		this.getAllProductsInCart();
	}

	getAllProductsInCart() {
		this.subscription = this.cartService.getAllProductsUseObservible().subscribe( data => {
			console.log(data);
			this.quantity = data.length;
			this.inCartProducts = data;
		});
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
