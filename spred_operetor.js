// make indivisual array element
function addThreeNumbers(a,b,c){
    return a+b+c;
}
const arr=[10,20,30];
console.log('sum is :',arr);
console.log('sum is :',...arr); //print indivisual array element and result is: 10 20 30
console.log('sum is :',addThreeNumbers(...arr));//pass indivisual array element and result is 60
console.log('sum is :',addThreeNumbers(...[1,2,3]))//and result is 6

// copy array
let source_arr=[10,20,30];
console.log(source_arr);
source_arr.push(100);
let dest_arr=[...source_arr];//copy array in dest_arr
console.log(dest_arr);

// conconate two Array
let arr1=[0,0.5];
let arr2=[1,2,3];
let arr3=[...arr1,...arr2];
console.log(arr3);

// copy object
let stu1={name:"Ajeet",company:"R R Traders"};
console.log('Object is :',stu1);
let stu2={...stu1}//copy object
console.log('Object is :',stu2);


let stu4={lastName:"verma"};
let stu5={...stu1,...stu4};
console.log('Object print stu4 :',stu4);
console.log('Object print stu5 after concanate :',stu5);