import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}
  @Input() product: Observable<Product>;
  @Output() addProductInCart = new EventEmitter<any>();
  attributes: { Color: string; Size: string };
  quantity: number;

  ngOnInit() {
    this.attributes = { Color: '', Size: '' };
    this.quantity = 1;
  }

  updateQuantity(operation: string) {
    if (operation === 'add') {
      this.quantity++;
    }
    if (operation === 'sub' && this.quantity > 0) {
      this.quantity--;
    }
  }

  addAttribute(attributeId: string, type: string) {
    this.attributes[type] = attributeId;
  }

  onAddProductInCart() {
    this.product
      .subscribe((product: Product) => {
        const item = {
          product,
          quantity: this.quantity,
          attributes: this.attributes
        };
        this.addProductInCart.emit(item);
        this.activeModal.dismiss('Cross click');
      })
      .unsubscribe();
  }
}
