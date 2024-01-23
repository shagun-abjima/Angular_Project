import { Recipe } from "./recipe.model";
export class RecipeService{
private  recipes: Recipe[] = [
    new Recipe('Arrabiata pasta', 'Recipe will be displayed here.', 'https://www.kitchensanctuary.com/wp-content/uploads/2023/07/Penne-alarrabiata-square-FS.jpg'),
    new Recipe('Alfredo pasta', 'Recipe will be displayed here.', 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2023-06-chicken-alfredo-pasta-reshoot%2Fchicken-alfredo-pasta-2-vertical')
  ];
  
  getRecipe(){
    return this.recipes.slice();
  }

}