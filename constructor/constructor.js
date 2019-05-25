//only function, with arrow function doesn't work
/* функция конструктор - это обычная функция, только вызывается
* с оператором new, пишеться с большой буквы
* */
function User(age) {
	this.name = 'name';
	this.age = age;

	if(!(this instanceof User)) {
		return new User(age);
	}
};

const returnConstructor = User('1');

const newObject = new User('1');
newObject.age = 2;

User.prototype.say = function () {
	console.log('say');
};

newObject.say();

console.log(returnConstructor);

/*------------------------------------------------------------*/

/* Будівельник:

Будівельник вимальовує стандартний процес створення складного
об’єкта, розділяючи логіку будування об’єкта від його представлення.14

*/

function Person(first, last, age, eye) { - логика для конструктора
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "English"; - логика для объекета

var myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather.nationality) - father будет брать nationality у портотипа