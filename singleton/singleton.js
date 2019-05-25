//суть в том, чтобы создать только один экземпляр класса
// тоесть     
// var singleton2 = new Singleton("data2") не сработает и вернет data1

/*

Создание одного экземпляра объекта. Например для создание одного глобального объекта. Или для создание одного объекта соединения с базой данных.
У синглетона должен быть приватный конструктор чтобы можно было создавать экзмепляр этого класса изнутри, но не снаружи.
Также у этого объекта должен быть метод getInstance() чтобы через него мы могли вызывать другие методы getInstance().sayHello()
Для управления количисества экземпялров объекта.

*/

'use strict';

let _singleton = null

class Singleton {
    constructor (data) {
        if(!_singleton) {
            this.data = data
            _singleton = this
        }
        else
            return _singleton
        console.log("Singleton class created")
    }

    SingletonOperation () {
        console.log('SingletonOperation')
    }

    GetSingletonData () {
        return this.data
    }
}

    var singleton1 = new Singleton("data1")
    var singleton2 = new Singleton("data2")
     console.log(singleton2.GetSingletonData())
