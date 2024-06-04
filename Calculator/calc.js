var txt=document.getElementById("Answer");

function EnterNumber(n){
    txt.value +=n;
}

function EnterOperator(e){
    txt.value +=e
}

function EnterClear(){
    txt.value ="";
}

function EnterEqual(){
    txt.value = eval(txt.value)
}