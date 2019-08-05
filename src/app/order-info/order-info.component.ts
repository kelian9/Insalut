import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../catalog/model/product.model';
import { OrderService } from '../order-service/order.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  @Input() totalPrice:{total, isFinal:boolean};
  @Input() shippingPrice:number;

  // Show or hide 'Доставка' field
  public shippingField:boolean = isNaN(this.shippingPrice);
  constructor(private order:OrderService) { }

  // OrderInfo для удобного отображения информации
  public orderInfo:{name:string,count:number}[] = [];
  public products:{product:Product, count:number}[];
  ngOnInit() {
    this.products = this.order.getSelectedProducts();
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      this.orderInfo.push({name: element.product.heading, count: element.count});
    }
    this.totalPrice = this.order.getTotalPrice();
  }

}
