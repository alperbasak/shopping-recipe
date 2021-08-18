import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {
  }

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

  getRecipes(): Recipe[] {
    // return the 'copy' of the recipe; to prevent update of 'original' recipes
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  toShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
