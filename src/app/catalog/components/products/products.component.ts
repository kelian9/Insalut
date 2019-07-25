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

  public selectedCategory:{category:string, heading:string};

  public products:Product[];

  ngOnInit() {
    this.selectedCategory = this.data.getCategory();
    this.products = this.data.getProducts({},this.selectedCategory.category);
  }

}