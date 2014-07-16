var canvas = document.getElementById("myCanvas"); 
 var cxt = canvas.getContext("2d"); 

var int;

function start()
{
    var level=document.getElementsByTagName("input");
   if(level[0].checked==true)
    {
       int=setInterval('draw();window.setTimeout("cxt.clearRect(randpos_x+10,randpos_y+10,80,80);",1000); ',2000);
       
    }else if(level[1].checked==true)
    {
       int=setInterval('draw();window.setTimeout("cxt.clearRect(randpos_x+10,randpos_y+10,80,80);",800); ',1500);
       
    }else if(level[2].checked==true)
    {
       int=setInterval('draw();window.setTimeout("cxt.clearRect(randpos_x+10,randpos_y+10,80,80);",500); ',1000);
   
    }else{alert("Choose Level!");}
}




function randColor(){
var randcolor="rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+(0.3+Math.random()*0.7)+")"
return randcolor;
}


var score=0;
var life=5;
var randpos_x;
var randpos_y;




function draw(){

cxt.save();
randpos_x=Math.floor(Math.random()*8)*90;
randpos_y=Math.floor(Math.random()*8)*90;
cxt.translate(randpos_x,randpos_y);
cxt.beginPath();
cxt.arc(50,50,40,0,Math.PI*2,true);
cxt.closePath();
globalCompositeOperation="copy";
cxt.fillStyle=randColor();

cxt.fill();
cxt.restore();


}
var dom_score=document.getElementById("score");
var dom_life=document.getElementById("life");
canvas.addEventListener("click", function (evt){var mousePos = getMousePos(canvas,evt);if(mousePos.x-randpos_x<=40&&mousePos.y-randpos_y<=40){score++;}else{life--;};dom_score.innerHTML=score;dom_life.innerHTML=life;}, false); 

function getMousePos(canvas, evt) { 
   var rect = canvas.getBoundingClientRect(); 
   return { 
     x: evt.clientX - rect.left * (canvas.width / rect.width),
     y: evt.clientY - rect.top * (canvas.height / rect.height)
   }
 }