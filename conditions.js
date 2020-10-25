console.log('condition js is attachecd');
if (5 > 0) {
    console.log("5 is greater than 0");
}
if (5 < 0) {
    console.log("5 is less than 0");
}

// let salary = 500;
// if (salary > 1000) {
//     console.log("My Salary is greater than 1000");
// } else {
//     console.log("My Salary is less than or equal to 1000");
// }
var salary = 500;
if (salary > 1000) {
    console.log("My Salary is greater than 1000");
} else if (salary < 1000) {
    console.log("My Salary is less than 1000");
} else {
    console.log("My Salary equal to 1000");
}


let t_result;
5 > 0 ? t_result="Greater" : t_result="Smaller";
console.log(t_result);


let age = prompt();
// console.log(age);
let c_age = Number(age);
switch (c_age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 30:
        console.log("You are 38");
        break;

    default:
        console.log("somthing went wrong");
        break;
} 