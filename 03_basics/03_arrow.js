const user = {
    username : "Lokesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this);  // only show {}


function one(){
    let username = "Lokesh"
    console.log(this);
}
one()


// ARROW FUNCTION
const chai = () => {
    let username = "Lokesh"
    console.log(this);
}
chai()

// basic
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "Lokesh"})

console.log(addTwo(2,4));