const compose = (...fns) =>
    fns.reduce((prevFn, nextFn) =>
        (...args) => nextFn(prevFn(...args)),
        value => value
    );

const number = compose(Math.round, parseFloat);

console.log(number('72.5')); //=> 73