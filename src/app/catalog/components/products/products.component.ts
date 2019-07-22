import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../model/catalog.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private data:CatalogService) { }

  public selectedCategory:string;

  ngOnInit() {
    this.selectedCategory = '/ ' + this.data.getCategory().heading;
  }

}
