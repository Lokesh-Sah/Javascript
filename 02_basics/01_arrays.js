// Array

let myArr = [1,2,3,4,5] // array contain all datatypes in a single variable
let myHeros = ["Ironman", "Spiderman"]

let myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);


// Array Methods
myArr.push(9)  // to add 9 in myArr
myArr.push(8)
myArr.pop()  // to remove last value from myArr


myArr.unshift(7)  // to put value in 0-index
myArr.shift()  // to remove value from 0-index

// console.log(myArr.includes(12));  // to show either it is present in array or not
// console.log(myArr.indexOf(4));

const newArr = myArr.join()  // Add all elements into a string
// console.log(newArr);
// console.log(myArr);



// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);