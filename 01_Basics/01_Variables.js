const accountId = 1234;
let accountEmail = "random@gmail.com";
var accountPassword = "02020"
accountCity = "Lahore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

// const accountId = 43221; This will cause a SyntaxError: Identifire 'accountId' has already been declared

accountEmail = "newemail@gmail.com"; /*This will work because accountEmail variable is has been declared as let and when assign the new value to that variable the value will be changed*/

accountPassword = "333444"; /*This will work beacase accountPassword has been declared as var and when assigning new value to that variable the value will be updated*/

accountCity = "Karachi"; /*This will work too and change the value with the new one*/

console.table([accountId, accountEmail, accountPassword, accountCity]);