import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupedCategory, Category } from '../../models';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  @Input() categories$: GroupedCategory;
  @Input() isLoading$: Observable<boolean>;
  @Output() fetchProductsByCategory = new EventEmitter<any>();
  selectedCategory: any;

  constructor() {}

  ngOnInit() {
    this.selectedCategory = '';
  }

  onFetchProductsOfCategory(category: Category) {
    this.selectedCategory = category ? category._id : '';
    this.fetchProductsByCategory.emit(this.selectedCategory);
  }
}
