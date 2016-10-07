console.log("Welcome to es6");
import Spinner from './Spinner';
window.Spinner = Spinner;

console.log(Spinner);

/*var spinner = new Spinner();
console.log(spinner.up());*/

const year = 2016;

let add = (x,y) => x + y; 

let numbers = [10,13,45,34,55];

let evenNumbers = numbers.filter(n => n % 2 === 0);

class Employee{
	constructor(id, name){
		this.id = id;
		this.name = name;
	}
	display(){
		console.log('id = ' + this.id + ', name = ' + this.name);
	}
}

class SalariedEmployee extends Employee{
	constructor(id, name, salary){
		super(id, name);
		this.salary = salary;
	}

	display(){
		//console.log('id = ' + this.id + ', name = ' + this.name + ' ,salary = '+this.salary);	
		let str = `id = ${this.id}, 
					name = ${this.name}, 
					salary = ${this.salary}`
		console.log(str);
	}
	static isSalariedEmployee(obj){
		return obj instanceof SalariedEmployee;
	}
}

let emp = new SalariedEmployee(100, 'Magesh', 20000);
emp.display();




