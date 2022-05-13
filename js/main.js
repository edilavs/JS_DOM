
var pow =16;

var btn1 = document.getElementById("increaseFs");

btn1.onclick = function (){
    var p= document.getElementsByTagName("p");
    for (let i = 0;i<p.length;i++) {
        p[i].style.fontSize=(pow+2)+"px";
        pow++
    }
}

var btn2 = document.getElementById("reduceFs");

btn2.onclick = function(){
   
    var p= document.getElementsByTagName("p");

    for (let i = 0;i<p.length;i++) {
        p[i].style.fontSize=(pow-2)+"px";
        pow--
    }
}
