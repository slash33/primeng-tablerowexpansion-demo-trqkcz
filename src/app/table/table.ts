import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Product } from '../product';
import { ProductService } from '../productservice';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  animations: [
    trigger('rowExpansionTrigger', [
      state(
        'void',
        style({
          transform: 'translateX(-10%)',
          opacity: 0,
        })
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class TableComponent {
  products: Product[];
  product1: any;
  @ContentChild('rowexpansion1') rowexpand: TemplateRef<any>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsWithOrdersSmall().then((data) => {
      this.products = data;
      this.product1 = { product: this.products[0] };
    });
  }
}
