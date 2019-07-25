import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { CatalogService } from '../../model/catalog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() item:Product;
  // public item:Product;
  constructor(private data: CatalogService, private router: Router) {
    
  }

  public openDetails(category, id) {
    this.router.navigate(['catalog/' + this.item.category.category + '/' + id]);
  }

  ngOnInit() {
  }

}
