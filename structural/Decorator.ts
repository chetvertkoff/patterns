/**
 * Декоратор — это структурный паттерн проектирования, который позволяет
 * динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки»
 *
 * - Когда надо динамически добавлять к объекту новые функциональные возможности. При этом данные возможности могут быть сняты с объекта
 * */
namespace Decorator {

  class Decorator {
    protected car
    constructor (car) {
      this.car = car
    }

    getPrice() {
      return this.car.getPrice()
    }

    getDescr() {
      return this.car.getDescr()
    }
  }

  class AutoPilotDecorator extends Decorator {
    getPrice() {
      return super.getPrice() + 300
    }
    getDescr(){
      return super.getDescr() + ' with autopilot'
    }
  }

  class ParktronicDecorator extends Decorator{
    getPrice() {
      return super.getPrice() + 100
    }
    getDescr(){
      return super.getDescr() + ' with parktronic'
    }
  }

  interface Car {
    price
    descr
    getPrice()
    getDescr()
  }
  
  class Tesla implements Car{
    price = 5000
    descr = 'tesla car'
  
    getPrice() {
      return this.price
    }
  
    getDescr() {
      return this.descr
    }
  } 
  
  class Audi implements Car{
    price = 6000
    descr = 'Audi car'
  
    getPrice() {
      return this.price
    }
  
    getDescr() {
      return this.descr
    }
  }

  const tesla = new Tesla()

  const teslaWithPark = new ParktronicDecorator(tesla)
  console.log(new AutoPilotDecorator(teslaWithPark).getDescr())
}