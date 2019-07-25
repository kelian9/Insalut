import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent implements OnInit {

  @Input() selectedProducts;
  constructor() { }

  public slidePosition:number = 0;

  public moveSlideBack() {
    if (this.slidePosition == 0) {
      return;
    }
    this.slidePosition = this.slidePosition + 12.5;
  }

  public moveSlideNext() {
    if (this.slidePosition == -100) {
      return;
    }
    this.slidePosition = this.slidePosition - 12.5;
  }

  public showFirstSlide() {
    this.slidePosition = 0;
  }

  public showSecondSlide() {
    this.slidePosition = -100;
  }
  
  public activateSecondSlide() {
    if (this.slidePosition <= -100) {
      return true;
    }
  }
  ngOnInit() {
  }

}
