import IPizzaIngredientFactory from "./IPizzaIngredientFactory";
import MarinaraSauce from "./MarinaraSauce";
import ReggianoCheese from "./ReggianoCheese";
import ThinCrustDough from "./ThinCrustDough";

export default class NYPizzaIngredientFactory implements IPizzaIngredientFactory{
  public createDough() {
    return new ThinCrustDough();
  }

  public createSauce() {
    return new MarinaraSauce();
  }

  public createCheese() {
    return new ReggianoCheese();
  }

  public createPepperoni() {
    return new ReggianoCheese();
  }

  public createClam() {
    return new ReggianoCheese();
  }
  
  public createVeggies() {
    return new ReggianoCheese();
  }
}


