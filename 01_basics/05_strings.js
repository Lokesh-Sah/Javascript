const name = "Lokesh"
const repoCount = 20

// it is old way of syntax
console.log(name + repoCount + "Value");

// stringInterpolation --> it is a modern way of writting syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string declaration
  // const name = "Lokesh"
  // const gameName = new String("Lokeshcoder")


const gameName = new String("Lokesh-coder")
console.log(gameName[0]);
console.log(gameName.__proto__);  // show object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

console.log(gameName.substring(0, 4));

const newString = gameName.slice(-2 , 4)
console.log(newString);

const newStringOne = "   Lokesh      "
console.log(newStringOne.trim()); // remove the unwanted space inside the quotes

const url = "https://developer.com/devloper%20coder"
console.log(url.replace('%20', '-'));
console.log(url.includes('developer'));  // check whether it is present or not

console.log(gameName.split('-')); // split on the basis of -, comma.