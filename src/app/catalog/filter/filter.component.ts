import { Component, OnInit } from '@angular/core';
import { FilterProperty } from '../model/filter-property.model';
import { Effect } from '../model/effect';
import { NgForm } from '@angular/forms';

declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  constructor() { }

  public properties:FilterProperty[] = [
    {name: 'Цена', range: [50, 50000], id: 'price'},
    {name: 'Длительность (сек)', range: [5, 60], id: 'time'},
    {name: 'Количество залпов (шт)', range: [1, 50], id: 'babah'},
    {name: 'Высота (м)', range: [20, 300], id: 'height'},
    {name: 'Калибр (дюйм)', range: [1, 20], id: 'caliber'}
  ];

  public effects:Effect[] = [
    {iconPath: 'assets/effect.jpg', id: 0, selected: false},
    {iconPath: 'assets/effect.jpg', id: 1, selected: false},
    {iconPath: 'assets/effect.jpg', id: 2, selected: false},
    {iconPath: 'assets/effect.jpg', id: 3, selected: false},
    {iconPath: 'assets/effect.jpg', id: 4, selected: false},
    {iconPath: 'assets/effect.jpg', id: 5, selected: false},
    {iconPath: 'assets/effect.jpg', id: 6, selected: false},
    {iconPath: 'assets/effect.jpg', id: 7, selected: false},
    {iconPath: 'assets/effect.jpg', id: 8, selected: false},
    {iconPath: 'assets/effect.jpg', id: 9, selected: false}
  ];

  public selectEffect(item) {
    this.effects[item.id].selected = true;
  }

  public onSubmit(form:NgForm) {
    let filterData:{} = {
      // price: [form.value.pricemin, form.value.pricemax],
      // time: [form.value.timemin, form.value.timemax],
      // babah: [form.value.babahmin, form.value.babahmax],
      // height: [form.value.heightmin, form.value.heightmax],
      // caliber: [form.value.calibermin, form.value.calibermax],
      props: this.props,
      effects: this.effects.filter((item) => item.selected == true)
    }
    console.log(filterData);
    this.effects = this.effects.map((item) => {
      item.selected = false;
      return item;
    });
  }

  public props:{} = {
    'price': [this.properties[0].range[0],this.properties[0].range[1]],
    'time': [this.properties[1].range[0],this.properties[1].range[1]],
    'babah': [this.properties[2].range[0],this.properties[2].range[1]],
    'height': [this.properties[3].range[0],this.properties[3].range[1]],
    'caliber': [this.properties[4].range[0],this.properties[4].range[1]]
  };

  
  ngOnInit() {

    for (let i = 0; i < this.properties.length; i++) {
      const element = this.properties[i];
      let props = this.props;
      $(function(){
    
        $( "#slider-range" + i ).slider({
        range: true,
        min: element.range[0],
        max: element.range[1],
        values: [ element.range[0], element.range[1]],
        slide: function( event, ui ) {
        $( "#" + element.id + "-min" ).val( ui.values[ 0 ] );
        $( "#" + element.id + "-max" ).val( ui.values[ 1 ] );
        props[element.id][0] = ui.values[0];
        props[element.id][1] = ui.values[1];
        }
        });
        // $( "#" + element.id + "-min" ).val( element.range[0] );
        // $( "#" + element.id + "-max" ).val( element.range[1] );
      });
      this.props = props;
    }

  }
}
