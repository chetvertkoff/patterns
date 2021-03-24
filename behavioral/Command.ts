namespace Command {

    class Engine {
        public state = 'off'

        on(): void {
            this.state = 'on'
        }

        off(): void {
            this.state = 'off'
        }
    }

    interface IDriverCommand {
        execute(): void
    }

    class Driver {

        constructor(private readonly _command) {
            this._command = _command
        }

        public execute(): void {
            this._command.execute()
        }
    }

    class OnEngine implements IDriverCommand {

        constructor(private readonly _engine) {
            this._engine = _engine
        }

        execute(): void {
            this._engine.on()
        }
    }

    class OffEngine implements IDriverCommand {

        constructor(private readonly  _engine) {
            this._engine = _engine
        }

        execute():void {
            this._engine.off()
        }
    }

    const engine = new Engine()
    const onEngine = new OnEngine(engine)
    const offEngine = new OffEngine(engine)

    const driver = new Driver(onEngine).execute()

    console.log(engine)
}