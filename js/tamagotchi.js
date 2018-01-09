export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sicknessLevel = 0;
    this.bordnessLevel = 0;
    this.sleepLevel = 0;
  }
  didItDie() {
    if ((this.foodLevel <= 0) || (this.sicknessLevel >= 10) || (this.bordnessLevel >= 20)) {
      return true;
    } else {
      return false;
    }
  }

// HUNGER
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  feed() {
    this.foodLevel = 10;
  }
// sickness
  setSickness() {
    setInterval(() => {
      this.sicknessLevel++;
    }, 5000);
  }
  medicate() {
    this.sicknessLevel = Math.floor((Math.random() * 9));
  }

// PLAY
  setBordness() {
    setInterval(() => {
      this.bordnessLevel++;
    }, 10000);
  }

  play() {
    if(this.bordnessLevel <= 1){
      this.foodLevel--;
    } else {
      this.bordnessLevel += -2;
    }
  }

// SLEEP JUST FOR TESTING!
  setSleep() {
    setInterval(() => {
      this.sleepLevel++;
    }, 1000);
  }

  sleepMode() {
    setTimeout(() => {
      this.sleepLevel = 0;
    },5000);
  }

}
