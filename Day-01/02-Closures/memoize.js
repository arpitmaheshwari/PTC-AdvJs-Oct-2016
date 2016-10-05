/*Create a function 'isPrime' that return if the given number is a prime or not.

The algo for checking if the given number is prime or not should not execute more than once for a given number
*/

function getPrimeFinder(){
	function checkPrime(n){
		console.log('processing ', n);
		if (n <= 3) return true;
		for(var i = 2; i <= (n/2); i++)
			if (n % i === 0) return false;
		return true;
	}

	var cache = {};

	function isPrime(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = checkPrime(n);
		return cache[n];
	}
	return isPrime;
}