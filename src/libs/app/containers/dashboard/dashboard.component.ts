import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from '../../components';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { GroupedCategory, Product, ProductData, Cart } from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading$: Observable<boolean>;
  categories$: Observable<GroupedCategory>;
  productsData$: Observable<ProductData>;
  product$: Observable<Product>;
  cart$: Observable<Cart[]>;

  searchText: string;
  categoryId: string;
  pageNumber: number;
  categoryIdSubject: Subject<string> = new Subject<string>();

  constructor(
    private modalService: NgbModal,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(fromStore.getIsLoading);
    this.categories$ = this.store.select(fromStore.getCategories);
    this.productsData$ = this.store.select(fromStore.getProducts);
    this.product$ = this.store.select(fromStore.getProduct);
    this.cart$ = this.store.select(fromStore.getCart);

    this.categoryIdSubject.next(null);
    this.searchText = '';
    this.categoryId = '';
    this.pageNumber = 1;
    this.fetchInitialData();
  }

  fetchInitialData() {
    this.store.dispatch(new fromStore.FetchCategories());
    this.getProducts();
  }

  openProductDetailModal(productId: string) {
    this.store.dispatch(new fromStore.FetchProductDetail(productId));
    const modalRef = this.modalService.open(ProductDetailComponent);
    modalRef.componentInstance.product = this.product$;
    modalRef.componentInstance.addProductInCart.subscribe((item: any) => {
      this.store.dispatch(new fromStore.AddItem(item));
    });
  }

  // Fetching products from search, or categories
  fetchProductsByCategory(categoryId: string) {
    this.categoryId = categoryId;
    this.searchText = '';
    this.pageNumber = 1;
    this.categoryIdSubject.next(this.categoryId);
    this.getProducts();
  }
  fetchProductsBySearchKey(searchText: string) {
    this.searchText = searchText;
    this.pageNumber = 1;
    this.getProducts();
  }
  fetchProductsByPageNumber(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getProducts();
  }

  private getProducts() {
    const query = {
      searchText: this.searchText,
      categoryId: this.categoryId,
      pageNumber: this.pageNumber
    };
    this.store.dispatch(new fromStore.FetchProducts(query));
  }
}
