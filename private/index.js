// Private data via symbols #
// Another storage location for private data are properties whose keys are symbols:

const _counter = Symbol('counter');
const _action = Symbol('action');

class Countdown {
    constructor(counter, action) {
        this[_counter] = counter;
        this[_action] = action;
    }
    dec() {
        if (this[_counter] < 1) return;
        this[_counter]--;
        if (this[_counter] === 0) {
            this[_action]();
        }
    }
}
// Each symbol is unique, which is why a symbol-valued property key will never clash with any other property key. Additionally, symbols are somewhat hidden from the outside world, but not completely:

const c = new Countdown(2, () => console.log('DONE'));

console.log(Object.keys(c));
    // []
console.log(Reflect.ownKeys(c));
    // [ Symbol(counter), Symbol(action) ]
// Pros:

// We can use prototype methods.
// The names of private properties can’t clash.
// Cons:

// Code is not as elegant as a naming convention.
// Not safe: you can list all property keys (including symbols!) of an object via Reflect.ownKeys().

/*-----------------------------------------*/

// Private fields are being implemented in the ECMA standard. You can start using them today with babel 7 and stage 3 preset. See babel REPL example.

class Something {
  #property;

  constructor(){
    this.#property = "test";
  }
}

const instance = new Something();
console.log(instance.property);

-------------------------

// private value with constructor

class Person {
    constructor(name) {
        var _name = name
        this.setName = function(name) { _name = name; }
        this.getName = function() { return _name; }
    }
}

-------------------------------

// The only way to get true privacy in JS is through scoping, so there is no way to have a property that is a member of this that will be accessible 
// only inside the component. The best way to store truly private data in ES6 is with a WeakMap.

const privateProp1 = new WeakMap();
const privateProp2 = new WeakMap();

class SomeClass {
  constructor() {
    privateProp1.set(this, "I am Private1");
    privateProp2.set(this, "I am Private2");

    this.publicVar = "I am public";
    this.publicMethod = () => {
      console.log(privateProp1.get(this), privateProp2.get(this))
    };        
  }

  printPrivate() {
    console.log(privateProp1.get(this));
  }
}
