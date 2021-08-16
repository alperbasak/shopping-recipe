import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://bit.ly/2RnB3Dh'),
    new Recipe('Another Test Recipe',
      'This is simply a test',
      'https://bit.ly/2RnB3Dh')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    // return the 'copy' of the recipe; to prevent update of 'original' recipes
    return this.recipes.slice();
  }

}
