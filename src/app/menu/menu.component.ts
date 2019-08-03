import { Component, OnInit, Input } from '@angular/core';
import { Category } from './category';

const styles = '../styles/style.scss';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', styles]
})
export class MenuComponent implements OnInit {

  @Input() placeholder;
  constructor() { }

  public categories:Category[] = [
    {category:'big-salut',text:'салюты большие'},
    {category:'medium-salut',text:'салюты средние'},
    {category:'min-salut',text:'салюты малые'},
    {category:'candles',text:'римские свечи'},
    {category:'rocket',text:'ракеты'},
    {category:'fountains',text:'фонтаны'},
    {category:'bag-butterfly',text:'жуки и бабочки'},
    // {category:'',text:'хлопушки и бенгальские огни'},
    {category:'firecrackers',text:'петарды'},
    {category:'balls',text:'фестивальные шары'},
    // {category:'',text:'дымовые фейерверки'},
    {category:'sets',text:'наборы'}
  ];
  ngOnInit() {
  }

}
