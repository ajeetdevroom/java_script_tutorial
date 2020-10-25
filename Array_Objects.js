console.log('this is tutorials for Array_Objects');

// let arr = new Array();
// let arr = [];

let arr = ['first element', 'second element', 'last element']
console.log(arr[0]) // output ' first element'
console.log(arr[1]) //  output ' second element'
console.log(arr[arr.length - 1]) //  output ' last element'

let age = [33,55,67,18];
console.log("Array length" + " " + age.length);
let s_age= age.sort();
console.log(s_age);
let r_age= age.reverse();
console.log(r_age);

let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); // a,b,c,1,2,3
console.log(alphaNumeric);

let std = ["Mark", "John", "Jonas", "Jack"];
let a = std.indexOf("John");
console.log(a);

let fruits = ["Banana", "Orange", "Apple"];
let len = fruits.push('Mango')
// ["Apple", "Banana", "Orange", "Mango"]
let last = fruits.pop() // remove Mango (from the end)
// ["Apple", "Banana", "Orange"]
let first = fruits.shift() // remove Apple from the front
// ["Banana", "Orange"]
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana", "Orange"]
try {
    let removedItem = fruits.splice(pos, 1) // this is how to remove an item
} catch (r) {
    console.log(r,name + r.error);
}
// ["Strawberry", "Orange"]

// let user = new Object(); // "object constructor" syntax
// let user = {}; // "object literal" syntax

let user = { 
    name: "Harry", // by key "name" store value "Harry"
    age: 25, // by key "age" store value 25
    language: "JaaScript" // by key "language" store value “ JavaScript”
  };
//   objectName.property
//  like  user.name
// objectName['propertyName'];
//  like  user['name'];

console.log(user['name']);
console.log(user['age']);

user.age = 27;