namespace Builder {
  interface IBuilder {
    upgradeEngine():Builder 
    upgradeOptions():Builder
    changeBodyType():Builder
    getCar():Car
  }
  
  class Builder {
    car: Car
    constructor(car) {
      this.car = car
    }
  
    public upgradeEngine(engine): Builder {
      this.car.engine = engine
      return this
    }
  
    public upgradeOptions(option): Builder {
      this.car.cruiseControl = option
      return this
    }
  
    public changeBodyType(bodyType): Builder {
      this.car.bodyType = bodyType
      return this
    }
    
    public getCar(): Car {
      return this.car
    }
  }
  
  class Car {
    engine = 'v4'
    cruiseControl = false
    bodyType = 'sedan'  
  }
  
  const builder = new Builder(new Car())
  builder.changeBodyType('coupe').upgradeEngine('v8').getCar()
}