import Pizza from './Pizza';
import IPizzaIngredientFactory from './IPizzaIngredientFactory';

export default class CheesePizza extends Pizza {
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