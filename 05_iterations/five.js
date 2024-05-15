const coding = ["Js", "Java", "Cpp", "py", "ruby"]

// coding.forEach(function (item) {    // it is call back function that's why it has no name
//     console.log(item);
// })


// By using arrow function
coding.forEach( (item) => {    // it is call back function that's why it has no name
    // console.log(item);
})


// // other way
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})



const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
})