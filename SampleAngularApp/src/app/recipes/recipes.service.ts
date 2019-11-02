import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shoping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Bigos',
      'Najlepszy pomysł na bigos',
      'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/zdjecie_glowne/public/bigos_z_kiszonej_kapusty.jpg?itok=ZeZ9_d_j',
      [
        new Ingredient('Kapusta', 2),
        new Ingredient('Kiełbasa', 3)
      ]),
    new Recipe(
      'Bigos numer 2',
      'Prawie najlepszy pomysł na bigos',
      'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/zdjecie_glowne/public/bigos_z_kiszonej_kapusty.jpg?itok=ZeZ9_d_j',
      [
        new Ingredient('Kapusta', 2),
        new Ingredient('Kiełbasa', 3)
      ])
  ];

  constructor(private shoppingListService: ShopingListService) {

  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
