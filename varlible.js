console.log('varlible scop var, const, and let ');
//Vriable let, var, and const
var _name= 'ajeet kumar verma ';
var channel;
var mark=34;
var city="delhi";
//ruls for creating variable
/*can be start with latter number _ and  $.
and variable becomes casesentive */
_name= "chaman";
console.log(_name, channel, mark);
/*
let
const can't reassign
var
*/
const myName="ajeet kumar";
// reassign not allowed
// myName="chaman"; 
//initializing most important when declare variable 
//const myName;
console.log(myName);
// when use array then we can change but can't reassign array
const arr1=[12,25,35,82,10];
arr1.push(100);
console.log(arr1);
// reassign
// arr1=[1,5,8];
// console.log(arr1);
// not allowed
/*
let
block level scope
*/
{
    let city="Faizabad";
    console.log(city);   
}
/*
var
globle level scope
same in all place
"avoid to use var for ghoch poch"
*/
console.log(city);
// case types
// 1. cammal case ex: camalCase
// 2. kabab case ex: kabab-case
// 3. snac case ex: snac_case
// 4. pascal case ex: PascalCase
