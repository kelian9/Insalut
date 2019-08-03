import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../model/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product.model';
import { Subscription } from 'rxjs';

const styles = '../catalog-styles/product-styles.scss';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss', styles]
})
export class ProductDetailsComponent implements OnInit {

  public id:number;
  public subscription: Subscription;
  constructor(private data: CatalogService, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params=>{
      this.id=+params['id'];
      this.product = this.data.openProductDetails(this.id);
    });
  }

  public selectedImage:string;

  public selectImage(path:string) {
    this.selectedImage = path;
  }

  public activateImage(item:string) {
    if (item == this.selectedImage) {
      return true;
    }
  }
  public productCount:number = 1;

  public sub() {
    if (this.productCount > 1) {
      this.productCount--;
    }
  }

  public add() {
    this.productCount++;
  }

  public product:Product;
  public similarProducts:Product[];

  public putInBasket(item:Product) {
    this.data.putInBasket(item, this.productCount);
  }

  ngOnInit() {
    this.selectedImage = this.product.imgPath[0];
    this.similarProducts = this.data.getProducts({},this.product.category.category).slice(0,9);
  }

}
