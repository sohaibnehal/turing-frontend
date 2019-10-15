import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, Shipping, Tax } from '../../models';

@Component({
  selector: 'app-checkout-calculation',
  templateUrl: './checkout-calculation.component.html',
  styleUrls: ['./checkout-calculation.component.scss']
})
export class CheckoutCalculationComponent implements OnInit {
  @Input() cart$: Observable<Cart[]>;
  @Input() shipping$: Shipping[];
  @Input() taxes$: Tax[];
  @Input() isLoading$: Observable<boolean>;
  cart: Cart[];
  selectedShippingOption: string;
  selectedTaxOption: string;
  shippingCost: number;
  taxCost: number;
  totalAmount: string;

  constructor() {}

  ngOnInit() {
    this.selectedShippingOption = '';
    this.selectedTaxOption = '';
    this.shippingCost = 0;
    this.taxCost = 0;
    this.totalAmount = '';
    this.cart$.subscribe(cart => {
      this.cart = cart;
      this.calculateTotal();
    });
  }

  shippingOptionChanged() {
    this.shippingCost = this.shipping$.filter(
      shipping => shipping._id === this.selectedShippingOption
    )[0].cost;
    this.calculateTotal();
  }

  taxOptionChanged() {
    this.taxCost = this.taxes$.filter(
      tax => tax._id === this.selectedTaxOption
    )[0].percentage;
    this.calculateTotal();
  }

  calculateTotal() {
    let total = 0;
    this.cart.forEach(item => {
      total += item.product.discounted_price * item.quantity;
    });
    total = this.shippingCost + total + total * (this.taxCost / 100);
    this.totalAmount = Number(total).toFixed(2);
  }
}
