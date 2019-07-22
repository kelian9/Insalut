import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private router: Router) { }

  public categories:Category[] = [
    {heading: 'наборы', category: 'sets', bgPath: '../assets/categories/sets.png'},
    {heading: 'салюты большие', category: 'big-salut', bgPath: '../assets/categories/salut.png'},
    {heading: 'салюты средние', category: 'medium-salut', bgPath: '../assets/categories/medium.png'},
    {heading: 'салюты малые', category: 'min-salut', bgPath: '../assets/categories/min.png'},
    {heading: 'римские свечи', category: 'candles', bgPath: '../assets/categories/candles.png'},
    {heading: 'ракеты', category: 'rocket', bgPath: '../assets/categories/rocket.png'},
    {heading: 'фонтаны', category: 'fountains', bgPath: '../assets/categories/fountain.png'},
    {heading: 'жуки и бабочки', category: 'bag-butterfly', bgPath: '../assets/categories/bags.png'},
    {heading: 'петарды', category: 'firecrackers', bgPath: '../assets/categories/crackers.png'},
    {heading: 'фестивальные шары', category: 'ball', bgPath: '../assets/categories/balls.png'}
  ];

  private selectedCategory = {
    category: '',
    heading: ''
  };

  // public selectCategory(category:string, heading:string) {
  //   this.selectedCategory = {
  //     category: category,
  //     heading: heading.charAt(0).toUpperCase() + heading.slice(1)
  //   };
  // }

  public getCategory() {
    // if (this.selectedCategory.heading == '') {
      let h = this.categories.filter((item) => item.category == this.router.url.slice(9));
      this.selectedCategory.heading = h[0].heading.charAt(0).toUpperCase() + h[0].heading.slice(1);
      this.selectedCategory.category = h[0].category;
    // }
    return this.selectedCategory;
  }
}
