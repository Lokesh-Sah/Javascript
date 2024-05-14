// Functions

function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumber(2,4)


// by returning value
function addTwoNumber(number1, number2) {
   return number1 + number2
}

const result = addTwoNumber(3,5)
// console.log("Result", result);


function loginUserMessage(username) {       // default value when argument is not passed -> username = "sam"
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Lokesh"));


// using rest operation
function calculateCartPrice(...num1) {   // use like ...num1 , due to this all value will display either there is 1 variable
    return num1
}

// console.log(calculateCartPrice(200, 199, 484, 235, 534));


// pass object in function
const user = {
    username : "Lokesh",
    price : 188,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({          // passing object directly
    username : "Sam",
    price : 199
})


// pass array in function
const myArray = [100, 400, 345, 600]

function returnValue(getArray) {
    return getArray[2]
}

// console.log(returnValue(myArray));
console.log(returnValue([100, 500, 300, 725]));