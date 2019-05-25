class Airplane {
    constructor(position, mediator) {
        this.position = position;
        this.mediator = mediator;
        this.mediator.position = position;
    }


    getPosition() {
        this.mediator.sendPosition(this.position);
    }
}

class Tower {
    constructor() {
        this.position = null;
    }

    sendPosition() {
        console.log("your position " + this.position);
    }
}

const towet = new Tower();
const boieng = new Airplane(10, towet);

boieng.getPosition();