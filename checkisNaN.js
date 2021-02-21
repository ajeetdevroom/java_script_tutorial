function checkIsNaN() {
    var text,x;
    x=document.getElementById("numfield").value;
    
    if(isNaN(x)||x<1||x>10){
        text="invalid input";
    }else{
        text="input data is valid";
    }
    document.getElementById("msgfield").innerHTML=text;
}