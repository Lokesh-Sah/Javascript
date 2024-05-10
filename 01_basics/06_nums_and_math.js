const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // to show how much decimal after digit

const otherNumber = 123.43432
console.log(otherNumber.toPrecision(2));

const hundred = 1000000
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));



// +++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-3)); // change only -ve to +ve
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));  // print upper value than 4 i.e 5
// console.log(Math.floor(4.6)); // print lower value i.e 4
// console.log(Math.min(5,2,6,8));
// console.log(Math.max(5,2,6,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min =10
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1)) + min);


