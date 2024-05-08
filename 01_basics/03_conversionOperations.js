let score = "23af"

// Two ways of finding typeof
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  // show NaN(not a number)

// "33" => 33
// "33sdf" => NaN
// true => 1; false => 0

let loggedIn = 1

let booleanIsLoggedIn = Boolean(loggedIn)
console.log(booleanIsLoggedIn)

// 1 -> true; 0 -> false
// "" -> false
// "Lokesh" -> true

let someNumber = 22

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);