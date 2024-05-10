// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// Problems come when try to compare 2 dataTypes
// console.log("2" > 1);
// console.log("02" > 1);


// Predictable answer will not come.   Try to avoid this type of conversion
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);


// Strict check i.e ===  -> it will not check only value also check dataTypes

console.log("2" === 2);
