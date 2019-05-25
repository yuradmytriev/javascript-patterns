class Click {
    constructor() {
      this.handlers = [];
    }
  
    subscribe(fn) {
      this.handlers.push(fn);
    }
  
    unsubscribe(fn) {
      this.handlers = this.handlers.filter(
        function(item) {
          if (item !== fn) {
            return item;
          }
        }
      );
    }
  
    fire(o, thisObj) {
      var scope = thisObj || window;
      this.handlers.forEach(function(item) {
        item.call(scope, o);
      });
    }
  }
  
  const clickHandler = (item) => {
    console.log('click')
  };
  
  const click = new Click();
  
  click.subscribe(clickHandler);
  click.fire();