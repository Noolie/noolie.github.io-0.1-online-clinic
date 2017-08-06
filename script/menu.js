var menu = document.getElementById('menu');
menu.style.height = '0px';
var burgerOne = document.getElementById('navigation');
burgerOne.onclick = function(){
    if (menu.style.height == '0px'){
        menu.style.height = '198px';

    } else {
        menu.style.height = '0px'
    }
}