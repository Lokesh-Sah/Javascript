// for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Maps --> known for unique value and o/p is of same order in which order you have written

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
// map.set('Fr', "France")   // not display bcz it work as unique

// console.log(map);


// for (const key of map) {    // it display in array form
//     console.log(key);
// }


for (const [key, value] of map) {  
    // console.log(key, ':-', value);
}


// for objects it will not work
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}