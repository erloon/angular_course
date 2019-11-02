import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Bigos',
      'Najlepszy pomysł na bigos',
      'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/zdjecie_glowne/public/bigos_z_kiszonej_kapusty.jpg?itok=ZeZ9_d_j'
    ),
    new Recipe(
      'Bigos numer 2',
      'Prawie najlepszy pomysł na bigos',
      'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/zdjecie_glowne/public/bigos_z_kiszonej_kapusty.jpg?itok=ZeZ9_d_j'
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
