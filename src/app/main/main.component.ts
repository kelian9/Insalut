import { Component, OnInit } from '@angular/core';
import { Product } from '../catalog/model/product.model';
import { CatalogService } from '../catalog/model/catalog.service';

const styles = '../styles/style.scss';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss', styles]
})
export class MainComponent implements OnInit {

  constructor(private data:CatalogService) { }

  public popularProducts:Product[];

  ngOnInit() {
    this.popularProducts = this.data.getPopularProducts();
  }

}
