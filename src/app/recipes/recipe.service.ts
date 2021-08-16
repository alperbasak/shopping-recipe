import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Tasty Stew',
      'A super tasty stew - wow!',
      'https://bit.ly/2XxpI6z',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Potato', 20),
      ]),
    new Recipe('Veggie Burger',
      'Burger for vegans - save the cows',
      'https://i.ytimg.com/vi/a19EY3YNStA/maxresdefault.jpg',
      [
        new Ingredient('Carrot', 4),
        new Ingredient('Bread', 7)
      ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    // return the 'copy' of the recipe; to prevent update of 'original' recipes
    return this.recipes.slice();
  }

}
