times = 0;

puts "How many times?"
times = gets.chomp.to_i

candidates = (2..times).to_a
primes = []

def getNextPrime(candidates, primes) 
  return primes if !candidates.any?

  nextPrime = candidates[0];
  primes.push(nextPrime);
  candidates.delete_if { |element| element%nextPrime == 0 }

  return getNextPrime(candidates, primes);
end


puts "Found #{getNextPrime(candidates, primes).size} primes."

