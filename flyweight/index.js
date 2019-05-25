class Flyweight {
    constructor(make, model, processor) {
        this.make = make;
        this.model = model;
        this.processor = processor;
    }
};

class Computer {
    constructor(make, model, processor, memory, tag) {
        // when we create new object of computer type
        // we get some part from FlyWeightFactory and return object
        this.flyweight = FlyWeightFactory.get(make, model, processor);

        // then we add to our object other properties
        this.memory = memory;
        this.tag = tag;
    }
}

const FlyWeightFactory = (() => {
    const flyweights = {};

    return {
        addFlyweights(uniqKey, make, model, processor) {
            flyweights[uniqKey] = new Flyweight(make, model, processor);
        },
        get(make, model, processor) {
            const uniqKey = make + model;
            const notExistFlyweights = !flyweights[uniqKey];

            if (notExistFlyweights) {
                this.addFlyweight(uniqKey, make, model, processor)
            }

            return flyweights[uniqKey];
        },
        count() {
            return Object.keys(flyweights).length;
        }
    }
})();

class ComputerCollection {
    constructor() {
        this.computers = {};
    }

    add(make, model, processor, memory, tag) {
        this.computers[tag] = new Computer(make, model, processor, memory, tag);
    }

    get() {
        return this.computers;
    }

    count() {
        return Object.keys(this.computers).length;
    }
}

const run = () => {
    const computers = new ComputerCollection();

    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

    console.log(computers.count());
    console.log(FlyWeightFactory.count()); // here we get number 2, because we have two different objects
};

run();
