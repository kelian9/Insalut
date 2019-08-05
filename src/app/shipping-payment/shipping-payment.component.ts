import { Component, OnInit, Input } from '@angular/core';
import { Shipping } from './model/shipping.model';
import { Product } from '../catalog/model/product.model';
import { OrderService } from '../order-service/order.service';

@Component({
  selector: 'app-shipping-payment',
  templateUrl: './shipping-payment.component.html',
  styleUrls: ['./shipping-payment.component.scss']
})
export class ShippingPaymentComponent implements OnInit {

  // User type (phys or entity)
  @Input() user;
  constructor(private order:OrderService) {
    this.user = {
      phys: true,
      entity: false
    };
  }

  // Models of form data
  public shipping:Shipping[];
  public payment:Shipping[];

  public selectShippingMethod(index:number) {
    this.shipping.forEach(element => {
      element.selected = false;
    });
    this.shipping[index].selected = true;
    this.setShippingPrice();
  }

  public selectPaymentMethod(index:number) {
    this.payment.forEach(element => {
      element.selected = false;
    });
    this.payment[index].selected = true;
  }

  // It is need for 'order-info' component
  public totalPrice:{total,isFinal:boolean};
  public shippingPrice:number = 0;
  public setShippingPrice() {
    let price:number;
    this.shipping.forEach(element => {
      if(element.selected == true) {
        price = element.price;
      }
    });
    this.shippingPrice = price;
    this.order.setShippingPrice(price);
    this.totalPrice = this.order.getTotalPrice();
  }

  ngOnInit() {
    this.totalPrice = this.order.getTotalPrice();
    this.shipping = this.order.getShipping();
    this.payment = this.order.getPayment();
  }

}
