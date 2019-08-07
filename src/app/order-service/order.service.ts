import { Injectable } from '@angular/core';
import { Product } from '../catalog/model/product.model';
import { Shipping } from '../shipping-payment/model/shipping.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  // Total Price
  private totalPrice:number;
  
  public setTotalPrice(price:number) {
    this.totalPrice = price;
  }

  // Если товаров в корзине нет - нет итоговой цены
  // Если цена доставки не NaN, то стоимость заказа = цене доставки + сумме товаров
  // значит Цена итоговая => isFinal = true
  // В остальных случаях указываем итоговую цену как итоговую на данный момент, isFinal = false
  public getTotalPrice() {
    let sum = this.getShippingPrice();
    let total = this.totalPrice;
    if (total == undefined) {
      return;
    }
    if (!isNaN(sum)) {
      return {total:sum + total, isFinal:true};
    }
    return {total:this.totalPrice, isFinal:false};
  }

  // Shipping price

  private shippingPrice:number = 0;

  public setShippingPrice(price:number) {
    this.shippingPrice = price;
  }
  public getShippingPrice() {
    return this.shippingPrice;
  }

  // Selected Products (order)
  private selectedProducts:{product:Product, count:number}[];

  public setSelectedProducts(products:{product:Product, count:number}[]) {
    this.selectedProducts = products;
  }

  public getSelectedProducts():{product:Product, count:number}[] {
    return this.selectedProducts;
  }

  // Shipping and Payment
  // Data for switches
  private shipping:Shipping[] = [
    {method: 'pickup', selected: true, price: 0},
    {method: 'mkad', selected: false, price: 0},
    {method: 'tenkm', selected: false, price: 0},
    {method: '50km', selected: false, price: 700},
    {method: 'more', selected: false, price: NaN}
  ];

  private payment:Shipping[] =[
    {method: 'cash', selected: true, price: NaN},
    {method: 'card', selected: false, price: NaN},
    {method: 'online', selected: false, price: NaN},
    {method: 'bank account', selected: false, price: NaN}
  ];

  public getShipping() {
    return this.shipping;
  }
  public getPayment() {
    return this.payment;
  }
}
