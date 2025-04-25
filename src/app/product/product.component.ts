import { Component } from '@angular/core';
import { Product } from './../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.products;
  }
}
