// var a = 100
let a = 300

if(true){
    let a = 10 
    const b = 20
    // var c = 25
    console.log("Inner", a);
}

console.log(a);
// console.log(b);
// console.log(c);   // c will display that's why var is not using mainly bacause var has scope in if cond but
// also it display when call from outside of if cond.



// nested scope

function one (){
    const username = "Lokesh"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);  // show error bcz out of scope

    two()
}

one()


if(true){
    const username = "Lokesh"
    if(username === "Lokesh"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


console.log(addOne(5));
function addOne(num){
    return num + 1
}



// console.log(addTwo(2));  // it will not display from here bcz function declare in expression
const addTwo = function(num){
    return num + 5
}
console.log(addTwo(2));