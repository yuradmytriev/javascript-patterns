function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}


var circleFns = {
  area: function() {
    return Math.PI * this.radius * this.radius;
  },
  grow: function() {
    this.radius++;
  },
  shrink: function() {
    this.radius--;
  }
};

var RoundButton = function(radius, label) {
  this.radius = radius;
  this.label = label;
};

extend(RoundButton.prototype, circleFns);

-------------------------------

class Dwarf {}

const Weaponry = {
  hitWithSword() {
    console.log("Swoosh!");
  }
};
Object.assign(Dwarf.prototype, Weaponry);
const dwarf = new Dwarf();

dwarf.hitWithSword(); // "Swoosh!"

------------------------------------

const Armed = (target) =>
  Object.assign(target, {
    hitWithSword() {
      console.log("Swoosh!");
    }
  });
Armed(Dwarf.prototype);
dwarf.hitWithSword(); // "Swoosh!"
