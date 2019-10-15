import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss']
})
export class CartWidgetComponent implements OnInit {
  @Input() cart$: { [key: string]: number };

  constructor(private router: Router) {}

  ngOnInit() {}

  keys(object: any) {
    return Object.keys(object).length;
  }

  openCartPage() {
    this.router.navigate(['/checkout']);
  }
}
