import { Component, OnInit } from '@angular/core';
import { Product } from '../catalog/model/product.model';
import { CatalogService } from '../catalog/model/catalog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', '../styles/style.scss']
})
export class MainComponent implements OnInit {

  constructor(private data:CatalogService) { }

  public popularProducts:Product[];

  ngOnInit() {
    this.popularProducts = this.data.getPopularProducts();
    console.log(this.popularProducts);
  }

}
