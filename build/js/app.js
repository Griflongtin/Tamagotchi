(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tamagotchi = exports.Tamagotchi = function () {
  function Tamagotchi(name) {
    _classCallCheck(this, Tamagotchi);

    this.name = name;
    this.foodLevel = 10;
    this.sicknessLevel = 0;
    this.bordnessLevel = 0;
  }

  _createClass(Tamagotchi, [{
    key: "didItDie",
    value: function didItDie() {
      if (this.foodLevel <= 0 || this.sicknessLevel >= 10 || this.bordnessLevel >= 20) {
        return true;
      } else {
        return false;
      }
    }

    // HUNGER

  }, {
    key: "setHunger",
    value: function setHunger() {
      var _this = this;

      setInterval(function () {
        _this.foodLevel--;
      }, 1000);
    }
  }, {
    key: "feed",
    value: function feed() {
      this.foodLevel = 10;
    }
    // sickness

  }, {
    key: "setSickness",
    value: function setSickness() {
      var _this2 = this;

      setInterval(function () {
        _this2.sicknessLevel++;
      }, 5000);
    }
  }, {
    key: "medicate",
    value: function medicate() {
      this.sicknessLevel = Math.floor(Math.random() * 9);
    }

    // PLAY

  }, {
    key: "setBordness",
    value: function setBordness() {
      var _this3 = this;

      setInterval(function () {
        _this3.bordnessLevel++;
      }, 10000);
    }
  }, {
    key: "play",
    value: function play() {
      if (this.bordnessLevel <= 1) {
        this.foodLevel--;
      } else {
        this.bordnessLevel += -2;
      }
    }
  }]);

  return Tamagotchi;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _tamagotchi = require('./../js/tamagotchi.js');

$(document).ready(function () {
  var gotchi = new _tamagotchi.Tamagotchi('Gingiffin');
  gotchi.setHunger();
  gotchi.setSickness();
  gotchi.setBordness();
  $('.buttonOne').click(function () {
    gotchi.feed();
  });
  $('.buttonTwo').click(function () {
    gotchi.medicate();
  });
  $('.buttonThree').click(function () {});
  var stop = setInterval(function () {
    if (gotchi.didItDie() === true) {
      $('.dead-screen').show();
      clearInterval(stop);
    }
    $('#food-level-output span#food').html(gotchi.foodLevel);
    $('#sick-level-output span#sick').html(gotchi.sicknessLevel);
    $('#bord-level-output span#bord').html(gotchi.bordnessLevel);
  }, 500);
});

},{"./../js/tamagotchi.js":1}]},{},[2]);
