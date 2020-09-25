namespace FabricMethod {
  //abstract creater
  abstract class PizzaStore{
    //fabric method
    protected abstract createPizza():Pizza;

    public orderPizza(): Pizza{
      return this.createPizza();
    }
  }
  // pizza creater
  class NYPizzaStore extends PizzaStore{
    protected createPizza(): Pizza{
      return new NYPizza();
    }
  }

  class ChicagoPizzaStore extends PizzaStore{
    protected createPizza(): Pizza{
      return new ChicagoPizza();
    }
  }

  // =============================================================

  // main pizza
  abstract class Pizza{
    name: string = "";
    dough: string ="";
    sauce: string ="";
    topping: string[] = [];

    prepare():void {
      console.log(`preparing ${this.name}`);
    }

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

  // sub pizza
  class NYPizza extends Pizza{
    constructor(){
      super();
      this.name = "NY Style Sauce and Cheese Pizza";
      this.dough = "Thin Crust Dough";
      this.sauce = "Marinara Sauce";

      this.topping.push("Grated Reggiano Cheese");
    }
  }

  class ChicagoPizza extends Pizza{
    constructor(){
      super();
      this.name = "NY Style Sauce and Cheese Pizza";
      this.dough = "Thin Crust Dough";
      this.sauce = "Marinara Sauce";

      this.topping.push("Grated Reggiano Cheese");
    }
  }

  const nyPizza: Pizza = new NYPizzaStore().orderPizza();

  nyPizza.prepare();
  nyPizza.bake();
  nyPizza.box();

}