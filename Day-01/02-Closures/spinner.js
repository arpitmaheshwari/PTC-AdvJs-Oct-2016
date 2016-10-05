Create a spinner object

//var spinner = ....

function getSpinner(){
	var  counter = 0;

	function increment(){
		return ++counter;
	}
	function decrement(){
		return --counter;
	}
	return {
		up : increment,
		down : decrement
	}
}

function getSpinner(){
	var counter = 0;
	return {
		up : function(){ return ++counter; },
		down : function(){ return --counter; }
	}
}

var spinner = (function(){
	var counter = 0;
	return {
		up : function(){ return ++counter; },
		down : function(){ return --counter; }
	};
})()

spinner.up(); // => 1
spinner.up(); // => 2
spinner.up(); // => 3
spinner.up(); // => 4

spinner.down(); //=> 3
spinner.down(); //=> 2
spinner.down(); //=> 1
spinner.down(); //=> 0
spinner.down(); //=> -1

