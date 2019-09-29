import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes: Recipe[] = [
  new Recipe('Bigos',
  'Najlepszy pomysł na bigos',
  'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/zdjecie_glowne/public/bigos_z_kiszonej_kapusty.jpg?itok=ZeZ9_d_j'),
  new Recipe('Bigos numer 2',
  'Prawie najlepszy pomysł na bigos',
  'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/zdjecie_glowne/public/bigos_z_kiszonej_kapusty.jpg?itok=ZeZ9_d_j')
];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
