//define a function
// function test() {
//     console.log("function called")
// }
// //call the function
// test();

//Returning functions
// function retStr() {
//     return "hello world!!!"
// }
// var val = retStr() //calling and Returning functions
// console.log("Print " + val)

//Parametrized Function
// function add(n1, n2) {
//     var sum = n1 + n2
//     console.log("The sum of the values entered " + sum)
// }
// add(12, 13)

//Default function parameters
// function dadd(a, b = 1) {
//     return a + b;
// }
// console.log(dadd(4))

// function addTwoNumbers(first, second = 10) {
//     console.log('first parameter is :', first)
//     console.log('second parameter is :', second)
//     return first + second;
// }
// console.log("case 1 sum:", addTwoNumbers(20)) // no value
// console.log("case 2 sum:", addTwoNumbers(2, 3))
// console.log("case 3 sum:", addTwoNumbers())
// console.log("case 4 sum", addTwoNumbers(1, null)) //null passed
// console.log("case 5 sum", addTwoNumbers(3, undefined))

// // RestParameters
// function fun1(...params) {
//     console.log(params.length);
//    }
//    fun1();
//    fun1(5);
//    fun1(5, 6, 7); 
//    fun1(5, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6, 7); 

// //    AnonymousFunction
// let f = function () {
//     return "hello"
// }
// console.log(f())

// // Function Constructor
// var func = new Function("x", "y", "return x*y;");
// function product() {
//     var result;
//     result = func(10, 20);
//     console.log("The product : " + result)
// }
// product()


// // Recursion and JavaScript Functions
// function factorial(num) {
//     if (num <= 0) {
//         return 1;
//     } else {
//         return (num * factorial(num - 1))
//     }
// }
// console.log(factorial(6))

// // Anonymous Recursive Function
// (function () {
//     var msg = "Hello World"
//     console.log(msg)
// })()


// Lambda Expression
// var foo = (x, y) => 10 + x * y
// console.log(foo(10, 20))

// // Lambda Expression with multiple line statements
// var msg = () => {
//     console.log("function invoked");
//     console.log("function invoked2");
// }
// msg()

// // Syntactic Variations( single parameter)
// var msg = x => {
//     console.log(x)
// }
// msg(10)

// // Empty parentheses 
// var disp = () => console.log("Hello World")
// disp();

// Lambda Expression
// var foo = (x, y) => 10 + x * y
// console.log(foo(10, 20))

// // conversion lambda to function
// function abc(x, y) {
//     return 10 + x * y
// }
// console.log(abc(10, 20))

//// ImmediatelyInvoked Function Expression
// var main = function () {
//     (function () {
//         for (var x = 0; x < 5; x++) {
//             console.log(x);
//         }
//     })();
//     console.log("x can not be accessed outside the block scope x value is :" + x);
// }
// main();


//// ImmediatelyInvoked Function Expression
// var main = function () {
//     var loop = function () {
//         for (var x = 0; x < 5; x++) {
//             console.log(x);
//         }
//     }();
//     console.log("x can not be accessed outside the block scope x value is: " + x);
// }
// main();

// "use strict"

// function* rainbow() { // the asterisk marks this as a generator
//     yield 'red';
//     yield 'orange';
//     yield 'yellow';
//     yield 'green';
//     yield 'blue';
//     yield 'indigo';
//     yield 'violet';
// }
// for (let color of rainbow()) {
//     console.log(color);
// }

// Generator Functions
function* ask() {
    const name = yield "What is your name?";
    const sport = yield "What is your favorite sport?";
    return `${name}'s favorite sport is ${sport}`;
}
const it = ask();
console.log(it.next());
console.log(it.next('Ethan'));
console.log(it.next('Cricket'));


// Anonymous functions
setTimeout(function () {
    console.log('Learning at TutorialsPoint is fun!!')
}, 1000)


// Array.prototype.map() and arrow function
const names = ['TutorialsPoint','Mohtashim','Bhargavi','Raja']
names.map((element,index)=>{
console.log('inside arrow function')
console.log('index is '+index+' element value is :'+element)
})
