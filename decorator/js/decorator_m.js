class Coffee {
  cost () {
    return 5
  } 
}

const sugar = coffee => {
  // get object
  const cost = coffee.cost();
  // method
  coffee.cost = () => cost + 1
};

const coffee = new Coffee();
sugar(coffee);

console.log(coffee.cost());