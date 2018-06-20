var makesaturnDancer = function(top, left, timeBetweenSteps) { 
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src = "https://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn_false.jpg">');
};
makesaturnDancer.prototype =Object.create(makeDancer.prototype);
makesaturnDancer.prototype.constructor = makesaturnDancer;
makesaturnDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
}

