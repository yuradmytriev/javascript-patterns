class Discount {
    constructor(strategy) {
        // get strategy function
        this.strategy = strategy;
        this.amount = 0;
    }

    getDiscount() {
        return this.strategy(this.amount)
    }
}

// describe strategy
const userStrategy = amount => amount + 1;

// use new stategy in the object
const userDiscount = new Discount(userStrategy);

console.log(userDiscount.getDiscount()); //1