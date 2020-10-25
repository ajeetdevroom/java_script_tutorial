console.log('javaScript data_types');
// primitive data types 
// store in stack
/* 
string
number
boolian
null (empty "intensialy keep empty")
undefine (without assign variable and default value)
symbol
*/ 
// reference data type 
// store in heap dynamic memory
/* 
object litteral
Array
Function
date
*/ 

// premitive variable
// string
var name="Ajeet";
console.log(name);
console.log(typeof name);
//string
var _name='Ajeet';
console.log(_name);
console.log(typeof _name);
// Number
var marks=32;
marks=32.5;
console.log(marks);
console.log(typeof marks);
// Boolean
var male=true;
console.log("you are male person" +" "+  male);
console.log(typeof male);
// null
var nullVar=null;
console.log("variable is" +" "+  nullVar);
console.log(typeof nullVar);
// undefined
var undefinedVar=undefined;
console.log("variable is" +" "+  undefinedVar);
console.log(typeof undefinedVar);


// reference variable
// Array
let arr1=[25,"ajeet",true]
console.log(arr1);
console.log(typeof arr1);

// object litterals
let _marks={
    hindi:88,
    english:95,
    math:80,
    'home sce':25
}
console.log(_marks);
console.log(typeof _marks);
console.log(_marks.hindi);
console.log(typeof _marks.hindi);
//function
function myFun(){
    console.log("my function is running");
}
myFun();
console.log(typeof myFun);

// Date
let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);