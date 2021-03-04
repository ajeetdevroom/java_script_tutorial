// var num=3;
// var factorial=1;
// for(let i=num;i>=1;i--){
//     factorial*=i;
// }
// console.log(factorial);

// "var strict"
// for(let temp,i=0,j=1;j<30;temp=i,i=j,j=i+temp)
// console.log(j);

// var obj={a:1,b:2,c:3};
// for(var prop in obj){
//     console.log(obj[prop])
// }


let arr=[12,13,14,15,16]
for(let val of arr){
    console.log(val);
}
arr.forEach(element=>
    console.log(element)
    
    )