/**
 * Мост — это структурный паттерн проектирования, который разделяет один или несколько классов на две
 * отдельные иерархии — абстракцию и реализацию, позволяя изменять их независимо друг от друга.
 *
 * - Когда надо избежать постоянной привязки абстракции к реализации
 * - Когда наряду с реализацией надо изменять и абстракцию независимо друг от друга.
 *  То есть изменения в абстракции не должно привести к изменениям в реализации
*/
namespace Bridge {
    // Абстракция
     class AbstractionFigure {
        constructor(private readonly _implementation: Color) {}

        draw() {
            return this._implementation.paint()
        }
    }

    class Circle extends AbstractionFigure {
        draw(): any {
            return super.draw() + ' circle'
        }
    }

    class Square extends AbstractionFigure {
         draw(): any {
             return super.draw() + ' square'
         }
    }

    // Реализация
    interface Color {
        paint(): string
    }

    class Blue implements Color {
        paint() {
            return 'blue'
        }
    }

    class Red implements Color {
        paint() {
            return 'red'
        }
    }

    const redSquare = new Square(new Red()).draw()

}