import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public id:number;
  public subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.firstChild.params.subscribe(params=>this.id=+params['id']);
    console.log(this.id);
  }

  public filterMobile:boolean = (document.documentElement.clientWidth < 600) ? true : false;
  public filterHeight:number = (document.documentElement.clientWidth < 600) ? 0 : 730;

  public openFilter() {
    this.filterMobile = !this.filterMobile;
    this.filterHeight = (this.filterHeight == 730) ? 0 : 730;
  }

  public filter() {
    if (this.id == 0 || !isNaN(this.id)) {
      return false;
    }
    return true;
  }

  ngOnInit() {
  }

}
