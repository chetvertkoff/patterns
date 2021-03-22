namespace Facade {

    class MakeCar {
        private readonly _car

        addWheels() {}

        addBody() {}

        addEngine() {}
    }

    class ConveyorFacade {
        constructor(private readonly _car) {}

        assembleCar() {
            this._car.addWheels()
            this._car.addBody()
            this._car.addEngine()
            return this._car
        }
    }

    const car = new ConveyorFacade(new MakeCar()).assembleCar()

}