function C(){
document.getElementById("screen").value="";
}

function show(value){
document.getElementById("screen").value+=value;
}

function calculate(){
var a=document.getElementById("screen").value;
var b=eval(a);
document.getElementById("screen").value=b;
}