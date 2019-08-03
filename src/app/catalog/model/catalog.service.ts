import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from './category.model';
import { Product } from './product.model';

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

  private products:Product[] = [];

  public getCategory() {
    // Отправлять запрос с категорией(для получения массива товаров конкретной категории)
    let h = this.categories.filter((item) => item.category == this.router.url.slice(9));
    this.products = [];
    for (let i = 0; i < 24; i++) {
      this.products.push(new Product(i, 12313 + i, {category: h[0].category, translate: h[0].heading.charAt(0).toUpperCase() + h[0].heading.slice(1)}, "Батарея \"Катюша\"", ['/assets/products/image.png','/assets/categories/rocket.png'], {time: 30, babah: 5, height: 30, caliber:10}, 2315 * (i+1), 'Описание карточки товара'));
    }
    this.selectedCategory.heading = h[0].heading.charAt(0).toUpperCase() + h[0].heading.slice(1);
    this.selectedCategory.category = h[0].category;
    return this.selectedCategory;
  }

  public getProducts(filterData, category:string):Product[] {
    // Отправлять запрос с категорией товара и данными с фильтра
    return this.products.filter((product => product.category.category == category));
  }

  public getPopularProducts() {
    //отправлять запрос на сервер для получения массива популярных товаров
    if (this.products.length == 0) {
      for (let i = 0; i < 9; i++) {
        this.products.push(new Product(i, 12311 + i, {category: 'sets', translate: 'наборы'.charAt(0).toUpperCase() + 'наборы'.slice(1)}, "Батарея \"Катюша\"", ['/assets/products/image.png', '/assets/categories/rocket.png'], {time: 30, babah: 5, height: 30, caliber:10}, 2315 * (i+1), 'Описание карточки товара'));
      }
    }
    return this.products;
  }

  private filter:boolean = true;

  public openProductDetails(id:number) {
    // Отправлять запрос с id товара
    let h = this.categories.filter((item) => {
      let index = this.router.url.slice(9).indexOf('/');
      return item.category == this.router.url.substr(9, index);
    });
    this.products = [];
    for (let i = 0; i < 24; i++) {
      this.products.push(new Product(i,12139 + i,  {category: h[0].category, translate: h[0].heading.charAt(0).toUpperCase() + h[0].heading.slice(1)}, "Батарея \"Катюша\"", ['/assets/products/image.png', '/assets/categories/rocket.png'], {time: 30, babah: 5, height: 30, caliber:10}, 2315 * (i+1), 'Описание карточки товара'));
    }
    this.filter = false;
    return this.products[id];
  }

  private shoppingBasket:{product:Product, count:number}[] = [];

  public getShoppingBasket():{product:Product, count:number}[] {
    return this.shoppingBasket;
  }

  public putInBasket(item:Product, count) {
    this.shoppingBasket.push({product: item, count: count});
  }

  public deleteProductIntoBasket(i) {
    let index = this.shoppingBasket.findIndex((item) => item.product.id == i);
    this.shoppingBasket.splice(index, 1);
  }
}
