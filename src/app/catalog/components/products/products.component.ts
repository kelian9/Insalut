import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../model/catalog.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private data:CatalogService) { }

  public scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  public selectedCategory:{category:string, heading:string};

  public products:Product[];
  public lists = [];
  public activeList:number = 0;

  public getProductsList() {
    return this.products.slice(this.activeList * 12,(this.activeList+ 1) * 12);
  }

  public switchList(list:number) {
    this.activeList = list;
  }

  ngOnInit() {
    this.selectedCategory = this.data.getCategory();
    this.products = this.data.getProducts({},this.selectedCategory.category);
    for (let i = 0;i < this.products.length / 12; i++) {
      this.lists.push({list: i});
      if ((i + 1 > this.products.length) && ((this.products.length ^ 0) != this.products.length)) {
        this.lists.push({list: i + 1});
      }
    }
  }

}