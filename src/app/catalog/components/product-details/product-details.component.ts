import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../model/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product.model';
import { Subscription, SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
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
      console.log(this.selectedImage, item);
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

  ngOnInit() {
    // this.product = this.data.openProductDetails(this.id);
    this.selectedImage = this.product.imgPath[0];
    this.similarProducts = this.data.getProducts({},this.product.category.category);
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // this.product = this.data.openProductDetails(this.id);
  }

}
