import { Tamagotchi } from './../js/tamagotchi.js';
let apiKey = require('./../.env').apiKey;
let mood = ['14uXQbPS73Y3qU', '3orieWDDl0mY3R4TCw'];
let giphy = function(input) {
  $.get(`http://api.giphy.com/v1/gifs/${mood[input]}?api_key=${apiKey}`).then(function(response)
  {
    $('.giphy-output').html(`<img src="${response.data.images.fixed_width.url}">`);
  }).fail(function(error) {
    $('#errors').text(`There was an error processing your request. Please try again.`);
  });
}

$(document).ready(function() {
  giphy(0);
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
  let stop = setInterval(() => {
    if (gotchi.didItDie() === true) {
      $('.dead-screen').show();
      clearInterval(stop);
      giphy(1);
    }
    $('#food-level-output span#food').html(gotchi.foodLevel);
    $('#sick-level-output span#sick').html(gotchi.sicknessLevel);
    $('#bord-level-output span#bord').html(gotchi.bordnessLevel);
  }, 500);
});
