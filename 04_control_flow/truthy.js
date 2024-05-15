const userEmail = "hc@gmail.com"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// Falsy value -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value -> "0", 'false', " ", [], {}, function(){} //empty function


// for array
const user = []
if(user.length === 0){
    console.log("Array is empty");
}

// for object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");;
}


// false == 0 -> true
// false == '' -> true
// 0 == '' -> true



// NUllish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10       // take first value
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


// Terniary Operator

// condition ? true : false

const icePrice = 100
icePrice >= 80 ? console.log("more than 80") : console.log("less than 80")