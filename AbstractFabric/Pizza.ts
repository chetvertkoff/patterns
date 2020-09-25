export default abstract class Pizza{
  name: string = "";
  dough: string ="";
  sauce: string = "";
  cheese: string = "";
  veggies: string = "";
  pepperoni: string = "";
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