import { Component } from '@angular/core';
import { Product } from './../product';


@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  imgURL1: string = 'images/product1.jpg';
  imgURL2: string = 'images/product2.jpg';
  imgURL3: string = 'images/product3.jpg';
  
  products: Product[] = [
  {
    image: this.imgURL1,
    productName: 'product1',
    productPrice: '100$',
    onSale: true,
  },
  {
    image: this.imgURL2,
    productName: 'product2',
    productPrice: '200$',
    onSale: false,
  },
  {
    image: this.imgURL3,
    productName: 'product3',
    productPrice: '300$',
    onSale: true,
  }]

}
