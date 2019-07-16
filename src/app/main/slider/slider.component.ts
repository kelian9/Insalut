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

  public swap:boolean = false;
  
  public switches:Switch[] = [
    {active: true, slideIndex: 0},
    {active: false, slideIndex: 1}
  ];

  public switch(i:number) {
    for(let item of this.switches) {
      item.active = false;
    }
    this.switches[i].active = true;
    this.swap = true;
    setTimeout(()=>{
      this.swap = false;
      this.activeSlide = this.slides[i];
    }, 500);
  }

  public slides:Slide[] = [
    {heading: "Салюты и фейерверки", text: "Праздник, который всегда с тобой", btnText: "Каталог", btnPath: "catalog", bgUrl: "../assets/slides/slide-1.jpg"},
    {heading: "Ракеты и фонтаны", text: "Действуют до конца января", btnText: "Акции", btnPath: "catalog", bgUrl: "../assets/slides/slide-1.jpg"}
  ];

  public activeSlide:Slide = this.slides[0];

  ngOnInit() {
  }

}
