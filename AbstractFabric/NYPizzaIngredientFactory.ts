import IPizzaIngredientFactory from "./IPizzaIngredientFactory";

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
}


