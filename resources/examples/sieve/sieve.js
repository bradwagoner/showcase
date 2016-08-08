/**
 * sieve.js
 * 
 * An implementation of the sieve of Eratoshenes executed by calling run(); On
 * completion primes will be populated with a list of the primes from 2 to the
 * value of 'times'
 */

// The variable to be populated after executing 'run()'
var primes = [];

/**
 * An initializer for the recursive getNextPrime function
 * 
 * @param times -
 *            the number of times to loop.
 */
function run(times) {
	var candidates = [];
	primes = [];

	for (var i = 2; i <= times; i++) {
		candidates.push(i);
	}

	getNextPrime(candidates);
}

/**
 * The meat of this class, getNextPrime is run recursively populating the primes
 * array on the way down
 * 
 * @param candidates
 */
function getNextPrime(candidates) {
	if (candidates.length == 0) {
		return;
	}

	var nextPrime = candidates[0];
	primes.push(nextPrime);
	candidates = candidates.filter(function(val) {
		return val % nextPrime != 0;
	});

	getNextPrime(candidates);
}
