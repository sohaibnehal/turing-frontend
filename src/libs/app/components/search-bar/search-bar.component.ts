import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Input() searchText: string;
  @Input() isLoading$: Observable<boolean>;
  @Input() categoryId: Observable<string>;
  @Output() fetchProductsBySearchKey = new EventEmitter<any>();
  subscription: Subscription;
  constructor() {}

  ngOnInit() {
    this.searchText = '';
    this.subscription = this.categoryId.subscribe(id => {
      this.searchText = '';
    });
  }

  onSearchProducts() {
    this.fetchProductsBySearchKey.emit(this.searchText);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
