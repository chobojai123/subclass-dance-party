describe('spongebob', function() {

  var spongebob, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spongebob = new makeSpongebob(10, 20, timeBetweenSteps);
  });
  
  it('should have a jQuery $node object', function() {
    expect(spongebob.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade in', function() {
    sinon.spy(spongebob.$node, 'fadeIn');
    spongebob.step();
    expect(spongebob.$node.fadeIn.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(spongebob, 'step');
      expect(spongebob.step.callCount).to.be.equal(0);
      // debugger;
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spongebob.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spongebob.step.callCount).to.be.equal(2);
    });
  });
});
