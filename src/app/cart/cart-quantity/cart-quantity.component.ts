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
	mTotal:number = 0;
	inCartProducts:Array<any>=[];

	constructor(
		public cartService : CartService
	) { }

	ngOnInit() {
		this.getAllProductsInCart();
	}

	getAllProductsInCart() {
		// this.subscription = this.cartService.getAllInCartProducts().subscribe((res)=>{
		// 	console.log(res);
		// 		this.mTotal = res.length;
		// 		this.inCartProducts = res;
		// 	})
		// this.subscription = this.cartService.getAllInCartProducts()
		// this.subscription = this.cartService.getCart().subscribe( data => {
		// 	console.log(data);
		// 	// this.mTotal = data.length;
		// 	// this.inCartProducts = data;
		// });
		this.subscription = this.cartService.getAllProductsHaoTestObservible().subscribe( data => {
			console.log(data);
			this.mTotal = data.length;
			this.inCartProducts = data;
		});

		// this.inCartProducts = this.cartService.getAllInCartProducts();
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
