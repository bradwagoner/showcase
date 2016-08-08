function fizzbuzz(times) {
	var result = [];

	for (var i = 1; i < times; i++) {
		var modThree = i % 3 == 0;
		var modFour = i % 4 == 0;

		if (modThree && modFour) {
			result.push("FizzBuzz");
		} else if (modThree) {
			result.push("Fizz");
		} else if (modFour) {
			result.push("Buzz");
		} else {
			result.push(i);
		}
	}

	return result;
}