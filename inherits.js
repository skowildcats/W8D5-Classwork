


Function.prototype.inherits = function(superClass) {
  function Surrogate() { }
  Surrogate.prototype = superClass.prototype
  this.prototype = new Surrogate()
  this.prototype.constructor = this
}

function MovingObject(name) {
  this.name = name
 }

MovingObject.prototype.myName = function() {
  return console.log(this.name)
}

function Ship(name) {
  this.name = name
 }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

let mo = new MovingObject("123");
mo.myName()
let new_ship = new Ship("4343")
new_ship.myName()
// mo.myName


