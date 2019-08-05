import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  public reviews = [
    {name: 'Alisa', review: 'Very good.Very good.Very good.Very good.Very good.Very good.Very good.Very good.'},
    {name: 'Alisa', review: 'Very good.Very good.Very good.Very good.Very good.Very good.Very good.Very good.'},
    {name: 'Alisa', review: 'Very good.Very good.Very good.Very good.Very good.Very good.Very good.Very good.'},
    {name: 'Alisa', review: 'Very good.Very good.Very good.Very good.Very good.Very good.Very good.Very good.'}
  ];

  ngOnInit() {
  }

}
