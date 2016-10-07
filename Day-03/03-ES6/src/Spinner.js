/*var Spinner = (function(){
     var counterSymbol = Symbol();
     function Spinner(){
          this[counterSymbol] = 0;
     }
     Spinner.prototype.up = function(){
         return ++this[counterSymbol];
     };
     Spinner.prototype.down = function(){
         return --this[counterSymbol];
     };
     return Spinner;
})();*/

let counterSymbol = Symbol();
export default class Spinner{
    constructor(){
        this[counterSymbol] = 0;
    }
    up(){
        return ++this[counterSymbol];
    }
    down(){
        return --this[counterSymbol];
    }
}
