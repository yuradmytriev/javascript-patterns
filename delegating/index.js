Делегирование 

// При делегировании в процесс обработки запроса вовлечено два объекта: получатель поручает выполнение операций другому объекту - уполномоченному.

// Чтобы достичь того же эффекта для делегирования, получатель передает указатель на самого себя соответствующему объекту, 
// дабы при выполнении делегированной операции последний мог обратиться к непосредственному адресату запроса. 
// Например, вместо того чтобы делать класс Window (окно) подклассом класса Rectangle (прямоугольник) - 
// ведь окно является прямоугольником, - мы можем воспользоваться внутри Window поведением класса Rectangle, 
// поместив в класс Window переменную экземпляра типа Rectangle и делегируя ей операции, специфичные для 
// прямоугольников. Другими словами, окно не является прямоугольником, а содержит его. Теперь класс Window 
// может явно перенаправлять запросы своему члену Rectangle, а не наследовать его операции

class Rectangle {
	getArea() {
  	console.log('area')
  }
}

class Window {
	constructor() {
  	this.rectangle = new Rectangle();
  }
  
  static rectangle()  {
  	new Rectangle().getArea();
  }  
  
  getWindowArea() {
    this.rectangle.getArea();	
  }
}

const wind = new Window();
Window.rectangle();
wind.getWindowArea();