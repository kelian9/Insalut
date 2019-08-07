import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { Switch } from './model/switches.model';

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent implements OnInit {

  @Input() selectedProducts:Product[];
  constructor() {}

  public slidePosition:number = 0;
  public switches:Switch[]=[];

  public sliderWidth:string;

  public getSlidesCount() {
    if (document.documentElement.clientWidth < 600) {
      return this.selectedProducts.length;
    }
    return 6;
  };

  public getSwitches():Switch[] {
    let array:Switch[] = [];
    let index:number = this.getSlidesCount();
    if (index > 6) {
      for (let i = 0; i < index; i++) {
        array.push(new Switch(false, i));
      }
    }
    else {
      for (let i = 0; i < this.selectedProducts.length / index; i++) {
        array.push(new Switch(false, i));
      }
    }
    array[0].active = true;
    return array;
  };

  public moveIndex:number;

  public moveSlideBack() {
    if (this.slidePosition == 0) {
      return;
    }
    this.slidePosition = this.slidePosition + this.moveIndex;
    if (document.documentElement.clientWidth < 600) {
      let a = this.switches.findIndex((item) => item.active == true);
      this.switches[a].active = false;
      this.switches[this.switches.findIndex((item) => item.slideNumber == -this.slidePosition / 100)].active = true;
    }
    this.switchBtns();
  }

  public moveSlideNext() {
    if (this.slidePosition <= -100 * (this.switches.length - 1)) {
      return;
    }
    this.slidePosition = this.slidePosition - this.moveIndex;
    if (document.documentElement.clientWidth <= 600) {
      let a = this.switches.findIndex((item) => item.active == true);
      this.switches[a].active = false;
      this.switches[a+1].active = true;
    }
    this.switchBtns();
  }

  public switchSlide(i:number) {
    for (let i = 0; i < this.switches.length; i++) {
      this.switches[i].active = false;
    }
    this.switches[i].active = true;
    this.slidePosition = i * -100;
  }

  public switchBtns() {
    for (let i = 0; i < this.switches.length; i++) {
      const element = this.switches[i];
      element.active = false;
      if ((this.slidePosition / 100 <= -element.slideNumber) && (this.slidePosition / 100 > -element.slideNumber - 1)) {
        element.active = true;
      }
    }
  }

  ngOnInit() {
    this.switches = this.getSwitches();
    this.moveIndex = (document.documentElement.clientWidth < 600) ? 100 : 12.5;
    this.sliderWidth = document.documentElement.clientWidth > 2000 ? 225 * this.selectedProducts.length + 'px' : this.switches.length * 100 + '%';
  }

}
