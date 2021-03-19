namespace AbstractFabric {
  interface AbstractCarsFactory {
    createSedan(): Sedan
    createCoupe(): Coupe
  }
  
  class ToyotaFactory implements AbstractCarsFactory {
    createSedan(): Sedan {return new ToyotaSedan()}
    createCoupe(): Coupe {return new ToyotaCoupe()}
  }
  
  class FordFactory implements AbstractCarsFactory {
    createSedan(): Sedan {return new FordSedan()}
    createCoupe(): Coupe {return new FordCoupe()}
  }
  
  ////
  
  interface Sedan {}
  interface Coupe {}
  
  class ToyotaSedan implements Sedan {}
  class ToyotaCoupe implements Coupe {}
  
  class FordSedan implements Sedan {}
  class FordCoupe implements Coupe  {}
  
  
  const toyotaCoupe = new ToyotaFactory().createCoupe();
  
}