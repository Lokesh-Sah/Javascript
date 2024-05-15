// const coding = ["Js", "Java", "Cpp", "py", "ruby"]

// // it will not work when store in variable and display
// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter( (num) => num > 4)   // num > 4 is condition
// console.log(newNums);


const newNums = myNum.filter( (num) => {
    return num > 4          // when {} is used then it should have return
})   
console.log(newNums);