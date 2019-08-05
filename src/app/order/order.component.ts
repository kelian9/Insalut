import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() {
    // Можно реализовать иначе(оптимизировать), если динамически генерирровать содержимое,
    //  с единичной отрисовкой компонента с информацией заказа
    // Вариант ниже не работает
    // const url: Observable<string> = activateRoute.url.pipe(map(segments => segments.join('')));
    // this.subscription = url.subscribe((data) => {
    //   console.log(data);
    //   this.heading = data.slice(7)=='contact-data' ? 'Контактные данные' : 'Способы доставки и оплаты';
    // });
    // console.log(this.heading);
  }
  ngOnInit() {
  }

}
