describe('tubeman', function() {

  var tubeman, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    tubeman = new makeTubeman(10, 20, timeBetweenSteps);
  });
  
  it('should have a jQuery $node object', function() {
    expect(tubeman.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node toggle', function() {
    sinon.spy(tubeman.$node, 'toggle');
    tubeman.step();
    expect(tubeman.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(tubeman, 'step');
      expect(tubeman.step.callCount).to.be.equal(0);
      // debugger;
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(tubeman.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(tubeman.step.callCount).to.be.equal(2);
    });
  });
});
