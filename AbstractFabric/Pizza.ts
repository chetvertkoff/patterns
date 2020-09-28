import Cheese from "./Cheese";
import Dough from "./Dough";
import IPizzaIngredientFactory from "./IPizzaIngredientFactory";
import Pepperoni from "./Pepperoni";
import Sauce from "./Sauce";
import Veggies from "./Veggies";

export default abstract class Pizza{
  name: string = "";

  dough: Dough ="";
  sauce: Sauce = "";
  cheese: Cheese = "";
  veggies: Veggies = "";
  pepperoni: Pepperoni = "";
  
  topping: string[] = [];

  abstract prepare():void;

  bake(): void {
    console.log("Bake for 25 minutes at 350");
  }

  box(): void {
    console.log("“Place pizza in official PizzaStore box");
  }

  getName(): string {
    return this.name;
  }

}