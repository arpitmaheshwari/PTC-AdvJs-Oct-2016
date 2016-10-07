"use strict";

var Spinner = function () {
     var counterSymbol = Symbol();
     function Spinner() {
          this[counterSymbol] = 0;
     }
     Spinner.prototype.up = function () {
          return ++this[counterSymbol];
     };
     Spinner.prototype.down = function () {
          return --this[counterSymbol];
     };
     return Spinner;
}();