import { Component, OnInit } from '@angular/core';
import { CatalogService } from './model/catalog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public id:number;
  public subscription: Subscription;
  constructor(private data:CatalogService, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.firstChild.params.subscribe(params=>this.id=+params['id']);
    console.log(this.id);
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
