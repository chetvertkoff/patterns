export default interface IPizzaIngredientFactory {
  createDough(): Dough;
	createSauce(): Sause;
	createCheese(): Cheese;
	createPepperoni(): Pepperoni;
	createClam(): Clams;
	createVeggies(): Veggies;
}