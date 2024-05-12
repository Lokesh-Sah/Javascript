// Dates

let myDate = new Date
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 12)
console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2024, 0, 12, 5, 10)
// let myCreatedDate1 = new Date("2024-5-24")
let myCreatedDate1 = new Date("1-2-2024")
console.log(myCreatedDate1.toLocaleString());


// Time

let myTimeStamp = Date.now() 

console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));  // for value in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('dafault', {weekday : "long"
})