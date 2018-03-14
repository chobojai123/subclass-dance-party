describe('putin', function() {

  var putin, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    putin = new makePutin(10, 20, timeBetweenSteps);
  });
  
  it('should have a jQuery $node object', function() {
    expect(putin.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade toggle', function() {
    sinon.spy(putin.$node, 'fadeToggle');
    putin.step();
    expect(putin.$node.fadeToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(putin, 'step');
      expect(putin.step.callCount).to.be.equal(0);
      // debugger;
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(putin.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(putin.step.callCount).to.be.equal(2);
    });
  });
});
