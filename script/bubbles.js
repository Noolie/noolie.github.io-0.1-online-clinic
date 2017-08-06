function _(x){return document.getElementById(x);}
var ba, bi=0, intrvl;
var bca = [
'<div><img src="images/staffPic.png"></div><h2>Alice G. Mullins</h2><p class="job">General Physician</p><p class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam error commodi in, ad dolores. Doloribus voluptatum odit nostrum assumenda, maiores. Ipsum doloremque iste excepturi eaque porro laborum ullam atque officiis.</p>',
'<div><img src="images/staffPic2.png"></div><h2>Peter Parker</h2><p class="job">Spider-man - Freelancer</p><p class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam error commodi in, ad dolores. Doloribus voluptatum odit nostrum assumenda, maiores. Ipsum doloremque iste excepturi eaque porro laborum ullam atque officiis.</p>',
'<div><img src="images/staffPic3.png"></div><h2>Kid Cuddy</h2><p class="job">Rap manager</p><p class="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam error commodi in, ad dolores. Doloribus voluptatum odit nostrum assumenda, maiores. Ipsum doloremque iste excepturi eaque porro laborum ullam atque officiis.</p>'
];

function bubbles(bi){
    
    _("bubblecontent").style.opacity = 0;
    
    for(var i=0; i < ba.length; i++){
        ba[i].style.background = "rgba(0,0,0,0)";
    }
    
    ba[bi].style.background = "#69d2e7";
    
    setTimeout(function(){
        _("bubblecontent").innerHTML = bca[bi];
        _("bubblecontent").style.opacity = 1;
    }, 300);
}
function bubbleSlide(){
    
    bi++;
    
    if(bi == ba.length){
        bi = 0;
    }
    
    bubbles(bi);
}

window.addEventListener("load", function(){
    ba = _("bubbles").children;
    intrvl = setInterval(bubbleSlide, 3000);
});