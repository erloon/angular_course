import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShopingListService {
ingridientsChanged = new EventEmitter<Ingredient[]>();
 private Ingredients: Ingredient[] = [
    new Ingredient('Kapusta', 2),
    new Ingredient('Kiełbasa', 2)
  ];

  getIngridients(){
    return this.Ingredients.slice();
  }

  addIngridient(ingredient: Ingredient){
    this.Ingredients.push(ingredient);
    this.ingridientsChanged.emit(this.Ingredients.slice());
  }
}
