var Die = function( sides ) {
  this.sides = sides;
  this.roll();
};

Die.prototype.roll = function() {
  this.value = Math.floor( Math.random() * this.sides ) + 1;
  return this.value;
};

var d = new Die(6);

module.exports = Die;
