import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{
  recipeSelected=new EventEmitter<Recipe>();
private  recipes: Recipe[] = [
    new Recipe('Arrabiata pasta', 
    'Recipe will be displayed here.',
     'https://www.kitchensanctuary.com/wp-content/uploads/2023/07/Penne-alarrabiata-square-FS.jpg',
     [new Ingredient('butter',1),new Ingredient('garlic and ginger',1),new Ingredient('soya sauce',1),]),
    new Recipe('Alfredo pasta', 'Recipe will be displayed here.', 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-06-chicken-alfredo-pasta-reshoot%2Fchicken-alfredo-pasta-2-vertical',
    [new Ingredient('butter',1),new Ingredient('garlic',1),new Ingredient('cream',1),])
  ];
  constructor(private slService:ShoppingListService){

  }
  getRecipe(){
    return this.recipes.slice();
  }
  addIngredientsToShopping(ingredients:Ingredient[]){
  this.slService.addIngredients(ingredients);

  }
  

}