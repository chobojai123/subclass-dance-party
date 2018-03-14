var makePutin = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass( "putin" );
};

makePutin.prototype = Object.create(makeDancer.prototype);
makePutin.prototype.constructor = makePutin;

makePutin.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();

  var define = this;
  this.$node.on('mouseover', function(event) {
    var styleSettings = {
      height: 200,
      width: 200
    }
    define.$node.css(styleSettings);
  });
}