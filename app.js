//JUNIOR DEVELOPER QUESTITONS

// What is the difference between var, let, and const?

//const can't be reassigned, while let and var can

//let and const came from es6, var is the original declaration

//var has hoisting, let and const don't

// console.log(x)
// console.log(y)

// var x = 5; //undefined
// let y = 5; //error

//var is function scoped
//let/const are block scoped

//var, if declared in thte global scope, attaches itself to the global object



// What is the difference between an es5 function and an es6(arrow) function?

// es5 has keyword function
// es6 uses the arrow

//es5 

//hoisting
//declared with the keyword function
//uses the arguments object
//this keyword is dymanic

// test(true, 7, "Blah") //"HELLO"

// function test(){
//   console.log(arguments)
//   console.log("HELLO")
// }

//es6

//no hoisting
//declared like a regular variable (ie: ususally declared with const)
//doesn't use arguments, uses the ...rest operator
// don't create their own instance of this


// const test2 = (arg1, ...rest) => {
//   console.log(rest)
//   console.log("ES6")
// }

// test2(false, "hello", [1,2,3])





// What is the difference between == and ===? (double equals vs triple equals)

// coerce the variable to the same type, then apply ===

// console.log(7=="7") //true
// console.log(7==="7") //false



// What is scope?

//The part of the code where variables exist

//block scope (ie, a block of code that isn't a function)
//function scope (the scope of a function)

// let z = "global" //This will always be accesssible


//for loop is a block
// for (let i=0; i<10; i++){
//   console.log(i)
//   console.log(g)
// }

// console.log("THIS IS I", i) //This breaks on let

// for (var i=0; i<10; i++){
//   console.log(i)
// }
// console.log("THIS IS I", i) //This holds the value with var

// function blah(){
//   let g="G"
//   var l = 'L'
//   return "Hi"
// }

// blah()

// console.log(g) //breaks on let
// console.log(l) //break on var as well





// What is truthy and falsy?

//When coercing values to different types, if you coerce something a boolean, truthy/falsy are referring to the values, and what they will be coerced to.

// let x = '7'

// x = Boolean(x)

// console.log(x)

//6 falsy values
//false
//0
//NaN
//null
//undefined
//""

//everything else is truthy


// What is a ternary operator?

//shorthand if/else statement

// evaluation ? this thing happens if the evaluation is true :
// this other thing happens if the evaluation is false


// let z = 7

// let a = z < 10 ? "Single digit": "Multiple digit"

// console.log(`${z} is a ${a} number`)


// What is closure? (Note, this is likely the hardest question a junior will get, make sure you are very comfortable with this concept)

//JS will hold on to variables that should have otherwise been garbage collected


//HOF (Higher Order Function)
//A function that returns a function

// function close(a){
//   // console.log("A",a)
//   let x = "BLAH"
//   return function(b){
//     console.log("A = ", a)
//     console.log("B =",b)
//     console.log("X = ", x)
//     return a+b
//   }
// }

//a=6
// b=7
// let c = close(6)

// console.log("C = ", c)

// console.log(c(19))




// What is a pure function?

//a function which, if given the same values, will always return the same results
// a function in qhich all variable are instroduced in the parameters

// impure functions have variables ouside of the parameters, and can have unintended side-effects

// function pure(a,b){
//   return a+b
// }

// console.log(pure(1,2))

// let b = 2
// function impure(a){
//   return a+b
// }

// console.log(impure(1)) //3
//  b = 7

// console.log(impure(1)) //8

// b ='g'

// console.log(impure(1)) //1g


// What is a promise?

//When JS is doing something outside of it's basic environment
//when JS is dependent on a 3rd party to perform an action

//This is using .then/.catch

//.then/.catch won't occur until we get the true value from wherever we requested

// until we get the actual value, JS is holding a promise, which is basically like an IOU for a value

// weatherAPI.getWeather('Miami')
//   .then(results=>{
//     console.log(results.data)
//   })
//   .catch(err=>{
//   console.log(err.message)
// })

// What is coercion?

// changing variables to different types

//Explicit Coercion
//We are flat out telling JS to change the type of variable a

// let a = "7" //string
// console.log(typeof a)  //string
// a = Number(a)//number
// console.log(typeof a) //number 
// a = Boolean(a) //true
// console.log(typeof a) //boolean


// Implicit Coecion
// performing actions that indirectly cause the type to change

// let b = '10' //string
// console.log(typeof b)  //string
// b--
// console.log(typeof b) //number
// console.log(b) //9

// let c = 'Y'
// c--
// console.log(typeof c) //number
// console.log(c) //9

// let x = "5"
// let y = "7"

// console.log(x+y)

// REACT QUESTIONS

// What is JSX?

// JavaScript Extension
//A mix of HTML with JS
//This is the basis of React

// What is the difference between a class component and a function component?

//Class components have the state object, and behave like classes (eg: use "This")
//class also uses the render function

//class Something extends React.component{}


// function components are just JS
// function components now have hooks, which make them behave like class components

//const Blah = () => {}

// What is prop drilling?

//passing down/up values through multiple components
//This is usually seen as one of the headaches of React
//Redux/Context were created as a solution



// THIS keyword

//reference to the function/object it is currently in



// const hi6 = () => {
//   console.log(this)
//   console.log(`Hello, my name is ${this.name}`)
// }


// let person = {
//   name: "John",
//   age: 31,
//   location: "Miami",
//   greet: function(){
//     console.log(this)
//   },
//   greet6: ()=>{
//     console.log(this)
//   }
// }

// let person2 = {
//   name: "Jane",
//   age: 31,
//   location: "Miami",
//   greet: hi6
// }

// function hi(){
//   console.log(this)
//   console.log(`Hello, my name is ${this.name}`)
// }

// person.greet()
// person.greet6()
// person2.greet()

//es5 keyword functions will create its own instance of "this", depending on where it is called

// es6 does not, instead just inherits the previous "this" that was created

//Only 3 things create "this" in JS

//1. the global object
//2. an es5 function keyword function
//3. a class (Which is just a fancy function)