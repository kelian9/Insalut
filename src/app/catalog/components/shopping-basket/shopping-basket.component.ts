import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { CatalogService } from '../../model/catalog.service';
import { OrderService } from 'src/app/order-service/order.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {

  constructor(private data:CatalogService, private order:OrderService) { }

  public selectedProducts:{product:Product, count:number}[];

  public totalPrice:number;

  public getTotalPrice() {
    let array:number[]=[];
    for (let i = 0; i < this.selectedProducts.length; i++) {
      array.push(this.selectedProducts[i].product.price * this.selectedProducts[i].count);
    }
    if (array.length > 0) {
      return array.reduce((i, current) => i + current);
    }
    return undefined;
  }

  public deleteProductIntoBasket(i:number) {
    this.totalPrice -= this.selectedProducts.find((item) => item.product.id == i).product.price;
    this.data.deleteProductIntoBasket(i);
  }

  public sub(item) {
    if (item.count > 1) {
      --item.count;
      this.totalPrice = this.getTotalPrice();
    }
  }

  public add(item) {
    ++item.count;
    this.totalPrice = this.getTotalPrice();
  }

  public checkout() {
    this.order.setSelectedProducts(this.selectedProducts);
    this.order.setTotalPrice(this.totalPrice);
    let orderInfo = [];
    this.selectedProducts.forEach(element => {
      orderInfo.push({name: element.product.heading, count: element.count});
    });
    this.data.totalPrice = this.totalPrice;
  }

  ngOnInit() {
    this.selectedProducts = this.data.getShoppingBasket();
    this.totalPrice = this.getTotalPrice();
  }

}
