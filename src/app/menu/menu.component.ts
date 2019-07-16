import { Component, OnInit, Input } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Category } from './category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../styles/style.scss']
})
export class MenuComponent implements OnInit {

  @Input() placeholder;
  constructor() { }

  public categories:Category[] = [
    {category:'',text:'салюты большие'},
    {category:'',text:'салюты средние'},
    {category:'',text:'салюты малые'},
    {category:'',text:'римские свечи'},
    {category:'',text:'ракеты'},
    {category:'',text:'фонтаны'},
    {category:'',text:'жуки и бабочки'},
    {category:'',text:'хлопушки и бенгальские огни'},
    {category:'',text:'петарды'},
    {category:'',text:'фестивальные шары'},
    {category:'',text:'дымовые фейерверки'},
    {category:'',text:'наборы'}
  ];
  ngOnInit() {
  }

}
