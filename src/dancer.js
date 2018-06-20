
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left); 
};
makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

makeDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}
 






