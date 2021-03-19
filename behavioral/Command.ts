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

    const engine = new Engine() // off now

    new OnEngine(engine).execute() // toggle through command class

    console.log(engine) // engine on

}