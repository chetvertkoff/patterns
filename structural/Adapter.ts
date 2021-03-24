/**
 * Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе
 *
 * - Когда необходимо использовать имеющийся класс, но его интерфейс не соответствует потребностям
 * - Когда надо использовать уже существующий класс совместно с другими классами, интерфейсы которых не совместимы
 */
namespace Adapter {

    class JsonData {
        getJsonData() {
            return 'jsonData'
        }
    }

    class XMLData {
        getXml() {
            return 'XML'
        }
    }

    class JsonAdapter extends JsonData {
        constructor(private readonly _target) {
            super()
        }

        public getJsonData(){
            return this._target.getXml()
        }
    }

    function getDataFromServer(target){
        return target.getJsonData()
    }

    ////////////
    getDataFromServer(new JsonData())
    getDataFromServer(new JsonAdapter(new XMLData()))
}