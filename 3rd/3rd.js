document.children[0].addEventListener("contextmenu", e=> e.preventDefault());

function events(e){
    document.getElementById("p").innerHTML ="you have clicked on " +e.key+ " its ASCII Code is "+e.keyCode;
}