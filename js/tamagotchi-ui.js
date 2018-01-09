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
    gotchi.play();
  });
});

setInterval(() => {
  $('#food-level-output').text(gotchi.foodLevel);
  $('#sick-level-output').text(gotchi.sicknessLevel);
  $('#bord-level-output').text(gotchi.bordnessLevel);
}, 100);
