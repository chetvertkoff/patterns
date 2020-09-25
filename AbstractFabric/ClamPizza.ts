import IPizzaIngredientFactory from './IPizzaIngredientFactory';
import Pizza from './Pizza';

export default class ClamPizza extends Pizza {
  ingredientFactory: IPizzaIngredientFactory;

  constructor(ingredientFactory: IPizzaIngredientFactory){
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void{
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
		this.sauce = this.ingredientFactory.createSauce();
		this.cheese = this.ingredientFactory.createCheese();
  }
}