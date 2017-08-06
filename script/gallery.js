var imagecount = 1;
var total = 3;

function slide(x){
    var Image = document.getElementById('img');
    imagecount += x;
    if(imagecount > total){ imagecount = 1;}
    if(imagecount < 1){ imagecount = total;}
    Image.src = "images/img"+ imagecount +".png";
}