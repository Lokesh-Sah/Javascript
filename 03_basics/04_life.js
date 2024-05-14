// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();

// use ; to use another IIFE 
// using arrow function

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })()

// 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Lokesh')


// IIFE propose
// 1. Due to global scope problem, to remove that goloba scope variable problems
// 2. The function which execute immdeiately