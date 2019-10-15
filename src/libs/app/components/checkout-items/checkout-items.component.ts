import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models';

@Component({
  selector: 'app-checkout-items',
  templateUrl: './checkout-items.component.html',
  styleUrls: ['./checkout-items.component.scss']
})
export class CheckoutItemsComponent implements OnInit {
  @Input() cart$: Cart;
  @Input() isLoading$: Observable<boolean>;
  @Output() removeCartItem = new EventEmitter<any>();
  @Output() updateAttribute = new EventEmitter<any>();
  @Output() updateQuantity = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onRemoveCartItem(index: number) {
    this.removeCartItem.emit(index);
  }

  onUpdateAttribute(
    attributeId: string,
    type: string,
    item: any,
    index: number
  ) {
    const payload = {
      attributeId,
      type,
      item,
      index
    };
    this.updateAttribute.emit(payload);
  }
  onUpdateQuantity(item: any, index: number, operation: string) {
    if (operation === 'add') {
      item.quantity++;
    }
    if (operation === 'sub' && item.quantity > 1) {
      item.quantity--;
    }
    const payload = {
      item,
      index
    };
    this.updateQuantity.emit(payload);
  }
}
