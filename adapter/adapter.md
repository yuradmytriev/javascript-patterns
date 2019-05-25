### Adapter

Convert the interface of a class into another interface clients expect. 
Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

The Adapter pattern translates one interface (an object's properties and methods) to another. 
Adapters allows programming components to work together that otherwise wouldn't because 
of mismatched interfaces. The Adapter pattern is also referred to as the Wrapper Pattern.

One scenario where Adapters are commonly used is when new components need to be 
integrated and work together with existing components in the application.

Another scenario is refactoring in which parts of the program are rewritten with an 
improved interface, but the old code still expects the original interface.

![](./javascript-adapter.jpg)

```js

class Shipping {
  request(zipStart, zipEnd, weight) {
    return zipStart + zipEnd + weight;
  }
}

class AdvancedShipping {
  login(credentials) {};
  setStart(start) {};
  setDestination(destination) {};
  calculate(weight) {
    return weight;
  };
}

function ShippingAdapter(credentials) {
  const shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function(zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    }
  };
}

const credentials = {
  token: "30a8-6ee1"
};

const adapter = new ShippingAdapter(credentials);

const cost = adapter.request("78701", "10010", "2 lbs");

```
