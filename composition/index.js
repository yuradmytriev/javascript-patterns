const sayHello = () => console.log('hello');
const sayBy = () => console.log('by');

const compose = (...fns) =>
    initialVal => 
        fns.reduceRight((val, fn) =>
            fn(val), initialVal);
    


compose(sayHello(), sayBy())