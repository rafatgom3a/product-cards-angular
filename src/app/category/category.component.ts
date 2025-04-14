import { Component } from '@angular/core';
import { Category } from './../category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [CommonModule],
templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
    imgURL1: string = 'images/category1.jpg';
    imgURL2: string = 'images/category2.jpg';
    
    categories: Category[] =[
    {
      image: this.imgURL1,
      categoryName: 'category1',
    },
    {
      image: this.imgURL2,
      categoryName: 'category2',

    }]
}
