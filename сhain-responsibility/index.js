class Request {
    constructor(amount) {
        this.amount = amount;
    }

    get(bill) {
        const count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        return this;
    }
}

const run = () => {
    const request = new Request(1378);

    request.get(100).get(50).get(20).get(10).get(5).get(1);
};

run();