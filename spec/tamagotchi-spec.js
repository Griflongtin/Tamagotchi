import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let gotchi = new Tamagotchi('chichi');

  beforeEach(function() {
    jasmine.clock().install();
    gotchi.setHunger();
    gotchi.setSleep();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(gotchi.name).toEqual('chichi');
    expect(gotchi.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(gotchi.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    gotchi.foodLevel = 0;
    expect(gotchi.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    gotchi.feed();
    expect(gotchi.foodLevel).toEqual(10);
  });

  it('should have a name and a sleep level of 0 when it is created', function() {
    expect(gotchi.sleepLevel).toEqual(0);
  });

  it('should have a sleep level of 3 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(gotchi.sleepLevel).toEqual(3);
  });

  it('should get sleepy if sleep level reaches 10', function() {
    gotchi.sleepLevel = 10;
    expect(gotchi.sleepLevel).toEqual(10);
  });

  it('should reaset sleeplevel to 0 after sleepmode', function() {
    gotchi.sleepMode();
    expect(gotchi.sleepLevel).toEqual(0);
  });

});
