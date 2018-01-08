import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let gotchi = new Tamagotchi('chichi');

  beforeEach(function() {
    jasmine.clock().install();
    gotchi.setHunger();
    gotchi.setSleep();
    gotchi.setBordness();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    gotchi.foodLevel = 10;
    gotchi.sleepLevel = 0;
    gotchi.playLevel = 10;
    gotchi.bordnessLevel = 0;
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(gotchi.name).toEqual('chichi');
    expect(gotchi.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(gotchi.foodLevel).toEqual(7);
  });

  it('should die if the food level drops to zero', function() {
    gotchi.foodLevel = 0;
    expect(gotchi.didItDie()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    gotchi.feed();
    expect(gotchi.foodLevel).toEqual(10);
  });

  it('should have a sickness level of 0 at start', function() {
    expect(gotchi.sicknessLevel).toEqual(0);
  });

  it('should die if the sickness level hits 10', function() {
    gotchi.sicknessLevel = 10;
    expect(gotchi.didItDie()).toEqual(true);
  });

  it('should have a sickness level of a random number 0-9 if it is medicated', function() {
    jasmine.clock().tick(45001);
    gotchi.medicate();
    expect(gotchi.sicknessLevel).toBeGreaterThan(0);
    expect(gotchi.sicknessLevel).toBeLessThan(10);
  });
  it('should have a bordnessLevel level of 0 at start', function() {
    expect(gotchi.bordnessLevel).toEqual(0);
  });

  it('should die if the bordnessLevel level hits 20', function() {
    gotchi.bordnessLevel = 20;
    expect(gotchi.didItDie()).toEqual(true);
  });

  it('if bordnessLevel is <= 1 foodLevel--', function() {
    gotchi.bordnessLevel = 0;
    gotchi.foodLevel = 5;
    gotchi.play();
    expect(gotchi.foodLevel).toEqual(4);
  });

  it('should have a sleep level of 0 when it is created', function() {
    expect(gotchi.sleepLevel).toEqual(0);
  });

  it('should have a sleep level of 3 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(gotchi.sleepLevel).toEqual(3);
  });

  it('should reset sleeplevel to 0 after sleepmode', function() {
    gotchi.sleepMode();
    expect(gotchi.sleepLevel).toEqual(0);
  });


});
