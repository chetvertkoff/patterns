/**
* Легковес — это структурный паттерн, который экономит память, благодаря
* разделению общего состояния, вынесенного в один объект, между множеством
* объектов
*
* - Когда приложение использует большое количество однообразных объектов, из-за чего происходит выделение большого количества памяти
 *
*/
namespace Flyweight {

    class Car {
        constructor(public name) {
        }
    }

    class Flyweight {
        private lightweights: {[key: string]: Car} = {}

        add(name: string) {
            const car = this.lightweights[name]
            if(car) return car
            this.lightweights[name] = new Car(name)
            return this.lightweights[name]
        }

        list () {
            return this.lightweights
        }
    }

    const flyweight = new Flyweight()
    flyweight.add('bmw')
    flyweight.add('audi')
    flyweight.add('bmw')
    console.log(flyweight.list())
}