// outerloop:
// for(var i=0;i<5;i++){
//     console.log("outerloop: "+i);
//     innerloop:
//     for(var j=0;j<5;j++){

//         if(j>3)
//         break;
//         if(i==2)
//         break innerloop;
//         if(i==4)
//         break outerloop;
//         console.log("innerloop: "+j);
//     }
// }

outerloop: // This is the label name
    for (var i = 0; i < 3; i++) {
        console.log("Outerloop: " + i);
        for (var j = 0; j < 5; j++) {
            if (j == 3) {
                continue outerloop;
            }
            console.log("Innerloop: " + j);
        }
    }