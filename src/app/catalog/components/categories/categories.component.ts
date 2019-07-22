import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category.model';
import { Router } from '@angular/router';
import { CatalogService } from '../../model/catalog.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router, private data:CatalogService) { }

  public categories:Category[];

  public openProducts(category:string, heading:string) {
    // this.data.selectCategory(category, heading);
    this.router.navigate(['catalog/' + category]);
  }
  ngOnInit() {
    this.categories = this.data.categories;
  }

}
