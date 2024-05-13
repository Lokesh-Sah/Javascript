// object literals

const mySym = Symbol("key1")  // symbol is created

// object declare
const JsUser = {
    name: "Lokesh",
    "full name": "Lokesh Coder",
    [mySym]: "mykey1",  // for symbol use []
    age: 23,
    location: "Delhi",
    email: "lokesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// access object value
console.log(JsUser.email); // it only works when there is no quotes in key
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

// obj value change
JsUser.email = "coder@google.com"

    // freeze an object
// Object.freeze(JsUser)
JsUser.email = "developer@gmail.com"  // after freeze it will not change
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());