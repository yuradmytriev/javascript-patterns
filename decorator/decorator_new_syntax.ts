const timeout = ( milliseconds: number = 0 ) =>

    ( target, key, descriptor ) => {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {

      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);

    };

    return descriptor;
};

class DemoComponent {

  constructor() {}

  @timeout(2000)
  demoMethod() {
    console.log(1)
  }
}

new DemoComponent().demoMethod();