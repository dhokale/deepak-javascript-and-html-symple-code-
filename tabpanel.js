
    var tab=document.querySelectorAll('[role="tab"]');
    var tabpanel=document.querySelectorAll('[role="tabpanel"]');
    var tablist=document.querySelector('[role="tablist"]');
    var counter=0;
    tablist.addEventListener("keydown", handelKeyDown);
    function handelKeyDown(event){
        switch(event.keyCode) {
case 37:
if(document.activeElement === tab[0]) {
tab[tab.length-1].focus();
counter = tab.length-1;
}
else {
tab[counter].previousElementSibling.focus();
counter--;
}
break;
case 39:
if(document.activeElement === tab[tab.length-1]) {
tab[0].focus();
counter = 0;
}
else {
tab[counter].nextElementSibling.focus();
counter++;
}

break;
case 35:
tab[tab.length-1].focus();
counter = tab.length-1;
break;
case 36:
tab[0].focus();
counter = 0;
break;
default:
break;
}
    }
    tablist.addEventListener("click", handelClick)

function handelClick(event) {
for(var i = 0; i < tab.length;i++) {
tab[i].setAttribute("aria-selected","false");
tab[i].setAttribute("tabindex","-1");
    tabpanel[i].setAttribute("aria-hidden", "true");
}

document.activeElement.setAttribute("aria-selected","true");
document.activeElement.removeAttribute("tabindex");
  document.getElementById(document.activeElement.getAttribute("aria-controls")).removeAttribute("aria-hidden");
}

