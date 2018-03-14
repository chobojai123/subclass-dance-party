var makeTubeman = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass( "tube" );
};

makeTubeman.prototype = Object.create(makeDancer.prototype);
makeTubeman.prototype.constructor = makeTubeman;

makeTubeman.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

