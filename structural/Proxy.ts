/**
 * Паттерн Заместитель (Proxy) предоставляет объект-заместитель, который управляет доступом к другому объекту.
 * То есть создается объект-суррогат, который может выступать в роли другого объекта и замещать его
 *
 * - Когда надо осуществлять взаимодействие по сети, а объект-проси должен имитировать поведения объекта в
 * другом адресном пространстве. Использование прокси позволяет снизить накладные издержки при передачи данных через сеть.
 * Подобная ситуация еще называется удалённый заместитель (remote proxies)
 *
 * - Когда нужно управлять доступом к ресурсу, создание которого требует больших затрат.
 * Реальный объект создается только тогда, когда он действительно может понадобится, а до этого все запросы к
 * нему обрабатывает прокси-объект. Подобная ситуация еще называется виртуальный заместитель (virtual proxies)
 *
 * - Когда необходимо разграничить доступ к вызываемому объекту в зависимости от прав вызывающего объекта.
 * Подобная ситуация еще называется защищающий заместитель (protection proxies)
 *
 * - Когда нужно вести подсчет ссылок на объект или обеспечить потокобезопасную работу с реальным объектом.
 * Подобная ситуация называется "умные ссылки" (smart reference)
 */
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