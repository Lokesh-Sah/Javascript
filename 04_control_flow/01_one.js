// IF

const temperature = 40

if(temperature === 60){
    console.log("Temperature is less than 50");
}else{
    console.log("Temperature is greater than 50");
}


// check scope 
const score = 200
if(score > 100){
    const power = "Fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);   // show error bcz out of scope


// shorthand notation
const balance = 1000
// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if(balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}