var color=document.getElementById("color");
function cl(){
    var clone=color.cloneNode(true);
    var color1=Math.random() * 255;
    var color2=Math.random() * 255;
    var color3=Math.random() * 255;
    clone.style.backgroundColor = 'rgb('+ color1+ ',' +  color2+',' + color3 +')';
    document.getElementById("big").appendChild(clone);
}
