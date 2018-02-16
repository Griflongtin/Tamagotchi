import { Tamagotchi } from './../js/tamagotchi.js';

$(document).ready(function() {
  const gotchi = new Tamagotchi('Gingiffin');
  gotchi.setHunger();
  gotchi.setSickness();
  gotchi.setBordness();
  $('.buttonOne').click(function() {
    gotchi.feed();
  });
  $('.buttonTwo').click(function() {
    gotchi.medicate();
  });
  $('.buttonThree').click(function() {
  });
  let stop = setInterval(() => {
    if (gotchi.didItDie() === true) {
      $('.dead-screen').show();
      clearInterval(stop);
    }
    $('#food-level-output span#food').html(gotchi.foodLevel);
    $('#sick-level-output span#sick').html(gotchi.sicknessLevel);
    $('#bord-level-output span#bord').html(gotchi.bordnessLevel);
  }, 500);
});
