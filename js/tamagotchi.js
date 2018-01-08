export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 0;
    this.playLevel = 10;
  }

// HUNGER
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

// SLEEP
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




// TAMAGOTCHI GAME
// export class GameFeld {
//   constructor() {
//     this.
//   }
// }
//
//
// this.hunger;
// this.happy;
// this.bracelet;
// this.discipline;
// this.sick;
// this.life;
// this.sleep;
