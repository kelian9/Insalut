import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { CatalogService } from '../../model/catalog.service';
import { Router } from '@angular/router';

const styles = '../catalog-styles/product-styles.scss';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss', styles]
})
export class ProductCardComponent implements OnInit {

  @Input() item:Product;
  constructor(private data: CatalogService, private router: Router) {
  }

  public openDetails(category, id) {
    this.router.navigate(['catalog/' + this.item.category.category + '/' + id]);
  }

  public putInBasket(item:Product) {
    this.data.putInBasket(item, 1);
  }

  ngOnInit() {
  }

}
