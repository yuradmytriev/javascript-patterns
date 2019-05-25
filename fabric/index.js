/*

Удобно если в коде ошиблись и нужен другой интсанс клааса то можно в фабрике  изменить его. 
Единная точка создания похожих объектов. Напрмер фабрика машина и создание моделей в ней.

    create(jaqlRunner, jaql) {
        const pivotJaqlBuilder = new PivotBuilder(jaql);
        return new PivotRunner(pivotJaqlBuilder, jaqlRunner);
    },

*/

function Foo () {
  console.log("foo");
}

function Bar () {
  console.log("bar");
}

function factory (type) {
  switch (type) {
    case 'foo':
      return new Foo();
    case 'bar':
      return new Bar();
  }
}

foo = factory('bar');