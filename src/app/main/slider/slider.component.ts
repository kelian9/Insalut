import { Component, OnInit } from '@angular/core';
import { Switch } from './switch';
import { Slide } from './slide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  public slidePosition:number = 0;

  // public moveSlideBack() {
  //   if (this.slidePosition == 0) {
  //     return;
  //   }
  //   this.slidePosition = this.slidePosition + 100;
  //   this.activeSlide--;
  // }

  // public moveSlideNext() {
  //   if (this.slidePosition == -100) {
  //     return;
  //   }
  //   this.slidePosition = this.slidePosition - 100;
  //   this.activeSlide++;
  // }
  
  public activeSlide:number = 0;

  public slides:Slide[] = [
    {heading: "Салюты и фейерверки", text: "Праздник, который всегда с тобой", btnText: "Каталог", btnPath: "catalog", bgUrl: "../assets/slides/slide-1.jpg"},
    {heading: "Ракеты и фонтаны", text: "Действуют до конца января", btnText: "Акции", btnPath: "catalog", bgUrl: "../assets/slides/slide-1.jpg"},
    {heading: "Петарды и шары", text: "Горячие предложения", btnText: "Скидки", btnPath: "catalog", bgUrl: "../assets/slides/slide-1.jpg"}
  ];

  public switch(i) {
    this.slidePosition = -100 * i;
    this.activeSlide = i;
  }

  ngOnInit() {
  }

}
