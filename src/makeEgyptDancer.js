var makeEgyptDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeEgyptDancer.prototype = Object.create(makeDancer.prototype);
makeEgyptDancer.prototype.constructor = makeEgyptDancer;

makeEgyptDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.fadeToggle();
}

