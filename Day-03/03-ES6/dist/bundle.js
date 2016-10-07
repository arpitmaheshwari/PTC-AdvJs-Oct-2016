(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var counterSymbol = Symbol();

var Spinner = function () {
    function Spinner() {
        _classCallCheck(this, Spinner);

        this[counterSymbol] = 0;
    }

    _createClass(Spinner, [{
        key: "up",
        value: function up() {
            return ++this[counterSymbol];
        }
    }, {
        key: "down",
        value: function down() {
            return --this[counterSymbol];
        }
    }]);

    return Spinner;
}();

exports.default = Spinner;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("Welcome to es6");

window.Spinner = _Spinner2.default;

console.log(_Spinner2.default);

/*var spinner = new Spinner();
console.log(spinner.up());*/

var year = 2016;

var add = function add(x, y) {
	return x + y;
};

var numbers = [10, 13, 45, 34, 55];

var evenNumbers = numbers.filter(function (n) {
	return n % 2 === 0;
});

var Employee = function () {
	function Employee(id, name) {
		_classCallCheck(this, Employee);

		this.id = id;
		this.name = name;
	}

	_createClass(Employee, [{
		key: 'display',
		value: function display() {
			console.log('id = ' + this.id + ', name = ' + this.name);
		}
	}]);

	return Employee;
}();

var SalariedEmployee = function (_Employee) {
	_inherits(SalariedEmployee, _Employee);

	function SalariedEmployee(id, name, salary) {
		_classCallCheck(this, SalariedEmployee);

		var _this = _possibleConstructorReturn(this, (SalariedEmployee.__proto__ || Object.getPrototypeOf(SalariedEmployee)).call(this, id, name));

		_this.salary = salary;
		return _this;
	}

	_createClass(SalariedEmployee, [{
		key: 'display',
		value: function display() {
			//console.log('id = ' + this.id + ', name = ' + this.name + ' ,salary = '+this.salary);	
			var str = 'id = ' + this.id + ', \n\t\t\t\t\tname = ' + this.name + ', \n\t\t\t\t\tsalary = ' + this.salary;
			console.log(str);
		}
	}], [{
		key: 'isSalariedEmployee',
		value: function isSalariedEmployee(obj) {
			return obj instanceof SalariedEmployee;
		}
	}]);

	return SalariedEmployee;
}(Employee);

var emp = new SalariedEmployee(100, 'Magesh', 20000);
emp.display();

},{"./Spinner":1}]},{},[2]);
