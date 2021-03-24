/**
 * Посредник — это поведенческий паттерн проектирования, который позволяет
 * уменьшить связанность множества классов между собой, благодаря перемещению
 * этих связей в один класс-посредник.
 */
namespace Mediator {

    abstract class Mediator {
        public abstract send(msg: string, colleague: Colleague)
    }

    abstract class Colleague {
        protected constructor (public mediator) {}

        public abstract send (msg: string): void

        public abstract notify (msg:string): void
    }

    class Customer extends Colleague{
        constructor(mediator) {
            super(mediator)
        }

        public send(msg) {
            this.mediator.send(msg, this)
        }

        public notify (msg) {
            console.log(`Customer: ${msg}`)
        }

    }

    class Programmer extends Colleague{
        constructor(mediator) {
            super(mediator)
        }

        public send(msg) {
            this.mediator.send(msg, this)
        }

        public notify (msg) {
            console.log(`Programmer: ${msg}`)
        }

    }

    class Tester extends Colleague{
        constructor(mediator) {
            super(mediator)
        }

        public send(msg) {
            this.mediator.send(msg, this)
        }

        public notify (msg) {
            console.log(`Tester: ${msg}`)
        }

    }

    class ManagerMediator extends Mediator {
        send(msg, colleague) {
            colleague.notify(msg)
        }
    }

    const mediator = new ManagerMediator()

    const tester = new Tester(mediator)
    const customer = new Customer(mediator)
    const programmer = new Programmer(mediator)


    tester.send('test')
    programmer.send('1')
}