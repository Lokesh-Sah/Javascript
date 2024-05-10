// dataTypes are categorized on the basis of how data is stored in memory and access from memory.

// 1. Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const Name = "Lokesh"

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23456462344353234535642342343364563434563453n



// 2. Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Ironman", "Spiderman", "Blackman"]

let myObj = {
    name: "Lokesh",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World!");
}



// +++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) -- Copy of value, Heap (Non- Primitive) -- Actual value change

let myYoutube = "HelloCoder"

let anotherYoutube = myYoutube
anotherYoutube = "codeLover"

console.log(myYoutube);
console.log(anotherYoutube);

let userOne = {
    email: "coder@google.com",
    upi: "user@ehd"
}

let userTwo = userOne

userTwo.email = "lovecode@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);