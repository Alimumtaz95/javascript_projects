// Primitive data types
// 7 types: string, number, bigint, boolean, undefiend, symbol, null

const score = 100
console.log(typeof score) // number

const scoreValue = 100.5
console.log(typeof scoreValue) //number

const isLoggedIn = true
console.log(typeof isLoggedIn) // boolean

const outsideTemp = null
console.log(typeof outsideTemp) // object

let userEmail
console.log(typeof userEmail) // undefined

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(typeof id) // symbol
console.log(typeof anotherId) // symbol


// Reference(non-primitive) data types
// object, array, function

const heros = ["Quaid-e-Azam", "Allama Iqbal", "Dr. Abdul Qadeer Khan"]
console.log(typeof heros) // object

const myObj = {
    name: "Ali",
    age: 22,
    isLoggedIn: false
}
console.log(typeof myObj) // object

function myFunc() {
    console.log("Hello World!")
}
console.log(typeof myFunc) // function