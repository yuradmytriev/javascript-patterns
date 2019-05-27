Composition allows us to naturally build complex objects from simple components making it 
easier to reason about, rather than trying to identify commonality between classes and 
building a complex relational structure.

Composition is about taking simple objects and combining them to build more complex ones. 
To build a Lamborghini you might define a function for constructing essential features 
like engine, design and brakes. This creates a relationship of a Lamborghini has a engine, 
brakes and design.

Abstract example:

Define different object creators:

```js
const component1 = objectState => ({
  manipulation1: () => {
    objectState.manipulation;
  }
});

const component2 = objectState => ({
  manipulation2: () => {
    objectState.manipulation;
  }
});
```

Combine previous actions for creations new object with different methods:

```js
const object = () => {
  const state = {};

  return {
    state,
    ...component1(state),
    ...component2(state)
  };
};
```
