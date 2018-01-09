import { Tamagotchi } from './../js/tamagotchi.js';
var apiKey = require('./../.env').apiKey;


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
  let stop = setInterval(() => {
    if (gotchi.didItDie() === true) {
      alert('gotchi died')
      clearInterval(stop);
    }
    $('#food-level-output span#food').html(gotchi.foodLevel);
    $('#sick-level-output span#sick').html(gotchi.sicknessLevel);
    $('#bord-level-output span#bord').html(gotchi.bordnessLevel);
  }, 100);

  $.ajax({
        url: `http://api.giphy.com/v1/gifs/14uXQbPS73Y3qU?api_key=${apiKey}`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.giphy-output').html(`<img src="${response.data.images.fixed_width.url}">`);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.")
        }
      });
});
