var makeBlinkyDancer = function(top, left, timeBetweenSteps) { 
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src = "https://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn_false.jpg">');
};
makeBlinkyDancer.prototype =Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
}



