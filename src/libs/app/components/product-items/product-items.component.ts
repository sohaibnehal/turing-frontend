import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductData } from '../../models';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  @Input() isLoading$: Observable<boolean>;
  @Input() productsData$: ProductData;
  @Output() openProductDetailModal = new EventEmitter<any>();
  @Output() fetchProductsByPageNumber = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onOpenProductDetailModel(product: Product) {
    this.openProductDetailModal.emit(product._id);
  }

  onPageChange(event: number) {
    const currentPage = this.productsData$.productsPagination.currentPage;
    const pageClick = event; // Pagination starts with 0 page
    if (currentPage !== pageClick) {
      this.fetchProductsByPageNumber.emit(pageClick);
    }
  }
}
