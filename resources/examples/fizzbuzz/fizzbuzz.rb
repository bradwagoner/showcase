puts "\aHowdy!\a"
(1..100).each do |i|
	modThree = i%3==0;
	modFour = i%4==0;

	if modThree and modFour
		puts "FizzBuzz";
	elsif modThree
		puts "Fizz"
	elsif modFour
		puts "Buzz"
	else
		puts i;
	end
end
