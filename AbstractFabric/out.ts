import NYPizzaStore from "./NYPizzaStore";
import PizzaStore from "./PizzaStore";


const nyStore:PizzaStore = new NYPizzaStore();

let pizza = nyStore.orderPizza("cheese");

console.log(pizza);
