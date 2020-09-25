import Pizza from "./Pizza";

export default abstract class PizzaStore {
  protected abstract createPizza(item: string): Pizza;

  public orderPizza(type: string): Pizza{
    const pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.bake();
    return pizza;
  }
}