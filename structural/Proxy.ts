namespace ProxyPattern {

     interface ICarAccess {
         close()
         open()
     }

     class CarAccess implements ICarAccess{
            open() {
                return 'open door'
            }

            close() {
                return 'close door'
            }
     }

     class CarAccessProxy implements ICarAccess {
         constructor(private readonly _car) {}

         open() {
            if(this.checkAccess()) return this._car.open()
            else return this.close()
         }

         close() {
            return this._car.close()
         }

         private checkAccess(){return false}
     }

    console.log(new CarAccessProxy(new CarAccess()).open())
}