var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("scream");

img.onload = function() {
	ctx.drawImage(img,10,10);
} 