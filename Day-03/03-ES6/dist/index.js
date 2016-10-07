'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("Welcome to es6");

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