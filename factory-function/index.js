// Factories are simply functions that create objects
// The convention for Factory Functions is to capitalize the name.
// class way is faster than factory twice

// class Person {
//   constructor(message) {
//     this.message = message;
//   }

//   talk() {
//     console.log(this.message);
//   }
// }

// const somePerson = new Person('message');

// somePerson.talk();

const Person = () => {
	const message = 'message';
  return {
  	talk() {
      console.log(message);
    }
  }
};

const somePerson = Person();

somePerson.talk();

// or 

const Person = name => ({
  sayHello() {
    console.log("hello " + name)
  }
})

const person = Person("yura");

person.sayHello()
