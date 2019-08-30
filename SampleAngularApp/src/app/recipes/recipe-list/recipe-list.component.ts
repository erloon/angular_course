import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Bigos',
  'Najlepszy pomysł na bigos',
  'https://www.kwestiasmaku.com/sites/kwestiasmaku.com/files/styles/zdjecie_glowne/public/bigos_z_kiszonej_kapusty.jpg?itok=ZeZ9_d_j')
];

  constructor() { }

  ngOnInit() {
  }

}
