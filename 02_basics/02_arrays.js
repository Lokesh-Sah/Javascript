const marvel_heros = ["Ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // this will put dc array in marvel array

// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros) // combin 2 or more arrays and return new array without modifying.
console.log(allHeros);

// another one instead of concat
const all_new_heros = [...marvel_heros, ...dc_heros] // use more than 2 values like marvel_heros
console.log(all_new_heros);


// Return new array with all sub-array elements concatenated  
const another_array = [1, 2, 3, [4,5,6], 7, [6, 8, [4,6]]]
console.log(another_array.flat(Infinity));


console.log(Array.isArray("Lokesh")); // ask this is a array??
console.log(Array.from("Lokesh"));  // make it array
console.log(Array.from({name:"Lokesh"}));  // intersting and need to say want to make array with value or key.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // return new array from set of elements.
