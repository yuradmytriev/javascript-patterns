class Airplane {

    constructor(description) {
        this.description = description || 'Simple airplane';
        this.maxSpeed = 300;
        this.maxDistance = 700;
    }

    getDescription() {
       return this.description; 
    }
}

// decorator
class TransatlanticPlane {
    constructor(airplane) {
        this.plane = airplane;
    }

    getDescription() {
       return this.plane.getDescription() + ', transatlantic' ; 
    }
}