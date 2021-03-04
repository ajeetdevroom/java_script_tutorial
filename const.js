// let income=1000;
// const INTEREST_RATE=0.08;
// income=50000;//mutable
// console.log("changed income value is",income);
// document.write("income value after changed ",income);
// INTEREST_RATE+=0.01;//Error: not mutable 
//console.log("changed rate is ",INTEREST_RATE);
//const.js:6 Uncaught TypeError: Assignment to constant variable.


const DEPT_NOS=[10,20,30,50];
DEPT_NOS.push(40);
console.log("Array after push value 40 ",DEPT_NOS);
document.write(DEPT_NOS);
const emp_ids=[1001,1002,1003];
console.log("emloyee id array",emp_ids);
// re assigning variable ids
emp_ids=[2001,2002,2003];//Error: not mutable  const.js:19 Uncaught TypeError: Assignment to constant variable.
console.log("Employee array after reassign",emp_ids);