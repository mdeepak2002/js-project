const accountId = 144553
let accountEmail = "mdeepak@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and fucntional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])