/**
 * Фасад — это структурный паттерн проектирования, который предоставляет
 * простой интерфейс к сложной системе классов, библиотеке или фреймворку
 *
 * - Когда имеется сложная система, и необходимо упростить с ней работу.
 *  Фасад позволит определить одну точку взаимодействия между клиентом и системой.
 * */
namespace Facade {

    class MakeCar {
        private readonly _car

        addWheels() {}

        addBody() {}

        addEngine() {}
    }

    class ConveyorFacade {
        constructor(private _car) {}

        assembleCar() {
            this._car.addWheels()
            this._car.addBody()
            this._car.addEngine()
            return this._car
        }

        destroyCar() {
            this._car = new MakeCar()
            return this._car
        }
    }

    const car = new ConveyorFacade(new MakeCar()).assembleCar()

}