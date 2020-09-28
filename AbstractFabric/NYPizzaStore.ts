import CheesePizza from "./CheesePizza";
import ClamPizza from "./ClamPizza";
import NYPizzaIngredientFactory from "./NYPizzaIngredientFactory";
import PepperoniPizza from "./PepperoniPizza";
import Pizza from "./Pizza";
import PizzaStore from "./PizzaStore";

export default class NYPizzaStore extends PizzaStore{
  protected createPizza(item: string): Pizza {
    let pizza;
    const ingredientFactory = new NYPizzaIngredientFactory();

    switch (item) {
      case "cheese":
        pizza = new CheesePizza(ingredientFactory);
        pizza.name = item;
      break;
      case "clam":
        pizza = new ClamPizza(ingredientFactory);
        pizza.name = item;
      break;
      case "clam":
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.name = item;
      default:
        pizza = new CheesePizza(ingredientFactory);
        pizza.name = item;
      break;
    }
    console.log('debudg', pizza);
    
    return pizza;
  }
}