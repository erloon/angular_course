import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  Ingredients: Ingredient[] = [
    new Ingredient("Kapusta", 2),
    new Ingredient("Kiełbasa", 2)
  ];
  constructor() { }

  ngOnInit() {
  }

}
