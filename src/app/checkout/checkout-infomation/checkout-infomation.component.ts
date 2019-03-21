import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from './../checkout.service';
import { CartService } from './../../cart/cart.service';
import { CheckoutBill } from './../checkout-bill.class';

@Component({
	selector: 'app-checkout-infomation',
	templateUrl: './checkout-infomation.component.html',
	styleUrls: ['./checkout-infomation.component.css']
})
export class CheckoutInfomationComponent implements OnInit {

	customerInfo = this.fb.group({
		name: ['', Validators.required],
		addresses: this.fb.array([
			this.fb.control('', [
				Validators.required
	    	])
		])
	});
	
	public checkoutProducts : any[];
	public checkoutBill : CheckoutBill = new CheckoutBill(null, '',[],[], 0);
	public checkoutBills : CheckoutBill[] = [];

	ngOnInit() {
		this.checkoutProducts = this.checkoutService.getAllCheckoutProducts();
	}

	get addresses() {
	    return this.customerInfo.get('addresses') as FormArray;
	}

	constructor(
		private fb: FormBuilder,
		public routerService : Router,
		public checkoutService : CheckoutService,
		public cartService : CartService
	) { }

	addAddress() {
	    this.addresses.push(this.fb.control(''));
	}

	onSubmit() {
		let currentID = this.checkoutBills.length;
		this.checkoutBill.id = currentID !== 0 ? currentID + 1: 1;
		this.checkoutBill.name = this.customerInfo.value.name;
		this.checkoutBill.addresses = this.customerInfo.value.addresses;
		this.checkoutBill.products = this.checkoutProducts;
		// Đã lấy đc Bill
		this.checkoutBills.push(this.checkoutBill);
		// Sau khi thanh toán và lưu bill vào LocalStorage, xóa incartProduct đi và redirect sang history mua hàng :3
		localStorage.setItem('checkoutBills', JSON.stringify(this.checkoutBills));
		localStorage.setItem('inCartProducts', JSON.stringify([]));
		// console.log(this.checkoutBills);
		this.routerService.navigate(['checkout/notice']);
		localStorage.removeItem('inCartProducts');
		this.cartService.productsUseObservible.next([]);
	}

}
