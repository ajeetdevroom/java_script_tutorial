console.log(' for each \n for in \n for of \n and for traditional loop type js file is linked');
let name_arr = ["ajeet", "ankit", "ashwani", "alok", "akash", "aman"];
let person_obj = {
    name: "ajeet",
    age: 30,
    address: "Rampur bhagan faizabad",
    pin_no: 224103,
    mobile_no: 8808461356
}

console.log("\n");
console.log("traditional for loop");
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
for (let index = 0; index < name_arr.length; index++) {
    console.log(name_arr[index]);
}

console.log("\n");
console.log("for each loop");
// array.forEach(element => {
    
// });
name_arr.forEach(element => {
    console.log(element);
});

console.log("\n");
console.log("for in loop");
// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }
for (const key_name in person_obj) {
    if (person_obj.hasOwnProperty(key_name)) {
        const key_val = person_obj[key_name];
        console.log(key_name + " " + key_val);
    }
  
}
console.log("\n");
console.log("for of loop");
// for (const iterator of object) {
    
// }
for (const irt of name_arr) {
    console.log(irt);
}