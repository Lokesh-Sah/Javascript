const accountId = 234
let accountEmail = "lucky@gmail.com"
var accountPassword = "23234"
accountCity = "Ktm"  // try not to use like this
let accountState;  // when not initialise then js assume it as undefined.   

// accountId = l223 // not allowed because it is constant

console.log(accountEmail);

/*
Prefet not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])