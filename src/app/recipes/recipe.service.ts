import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Alfredo Pasta',
      'A super-tasty Alfredo - just awesome!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yECOnztIFUs8vqp6dK7LSwQEE6_Ym0i-0g&usqp=CAU',
      [
        new Ingredient('Garlic Bread', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Pizza',
      'What else you need to say?',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaL5RHcK_uaMwPjJLi-KIoSQlCKd38eXxBzg&usqp=CAU',
      [
        new Ingredient('Fries', 2),
        new Ingredient('Coke', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
