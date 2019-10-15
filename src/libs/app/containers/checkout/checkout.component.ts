import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromStore from '../../store';
import { Cart, Shipping, Tax } from '../../models';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  loading$: Observable<boolean>;
  cart$: Observable<Cart[]>;
  shipping$: Observable<Shipping[]>;
  taxes$: Observable<Tax[]>;

  constructor(
    private store: Store<fromStore.AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(fromStore.getIsLoading);
    this.cart$ = this.store.select(fromStore.getCart);
    this.shipping$ = this.store.select(fromStore.getShipping);
    this.taxes$ = this.store.select(fromStore.getTaxes);
    this.fetchInitialData();
  }

  fetchInitialData() {
    this.store.dispatch(new fromStore.FetchShipping());
    this.store.dispatch(new fromStore.FetchTaxes());
  }

  removeCartItem(index: number) {
    this.store.dispatch(new fromStore.RemoveItem(index));
  }

  updateAttribute(payload: {
    attributeId: string;
    type: string;
    item: any;
    index: number;
  }) {
    const { attributeId, type, item, index } = payload;
    item.attributes[type] = attributeId;
    this.store.dispatch(new fromStore.UpdateItem({ item, index }));
  }

  updateQuantity(payload: { item: any; index: number }) {
    const { item, index } = payload;
    this.store.dispatch(new fromStore.UpdateItem({ item, index }));
  }

  backToStore() {
    this.router.navigate(['/']);
  }
}
