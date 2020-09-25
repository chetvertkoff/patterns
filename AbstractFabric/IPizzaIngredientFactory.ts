import Cheese from "./Cheese";
import Clams from "./Clams";
import Dough from "./Dough";
import Pepperoni from "./Pepperoni";
import Sauce from "./Sauce";
import Veggies from "./Veggies";

export default interface IPizzaIngredientFactory  {
  createDough(): Dough;
	createSauce(): Sauce;
	createCheese(): Cheese;
	createPepperoni(): Pepperoni;
	createClam(): Clams;
	createVeggies(): Veggies;
}