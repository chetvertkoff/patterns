/**
 * Компоновщик — это структурный паттерн проектирования, который позволяет
 * сгруппировать множество объектов в древовидную структуру, а затем работать с ней так,
 * как будто это единичный объект
 *
 * - Когда объекты должны быть реализованы в виде иерархической древовидной структуры
 * - Когда клиенты единообразно должны управлять как целыми объектами, так и их составными частями.
 * То есть целое и его части должны реализовать один и тот же интерфейс
 *  */
namespace Composite {
    // определяет интерфейс для всех компонентов в древовидной структуре
    abstract class Component {
        protected parent: Component

        public abstract num?: number

        public setParent(parent: Component):void {
            this.parent = parent
        }

        public getParent(): Component {
            return this.parent
        }

        public add(component: Component): void {}

        public remove(component: Component): void {}

        public isComposite(): boolean {return false}

        public abstract operation(): string|number
    }
    // представляет отдельный компонент, который не может содержать другие компоненты
    class Leaf extends Component {
        public num = Math.random()
        operation() {
            return 'leaf'
        }
    }
    // представляет компонент, который может содержать другие компоненты и реализует механизм для их добавления и удаления
    class Composite extends Component {
        public num = Math.random()

        protected children: Component[] = []

        public add (component): void {
            this.children.push(component)
            component.setParent(this)
        }

        public remove (component): void {
            component.setParent(null)
            this.children = this.children.filter(ch => ch !== component)
        }

        public isComposite(): boolean {
            return true
        }

        public operation(): number {
            return this.children.reduce((acc,ch) => acc + ch.num, 0)
        }

    }

    const tree = new Composite()
    const branch1 = new Composite()
    const branch2 = new Composite()

    const branch1_1 = new Composite()
    const branch1_2 = new Composite()

    branch1.add(branch1_1)

     branch1_2.add(new Leaf())
    branch1.add(branch1_2)

    branch2.add(new Leaf())

    tree.add(branch1)
    tree.add(branch2)

}