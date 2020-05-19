
window.addEventListener("load", funcioInici,false);
window.addEventListener("keydown", funcioInici, false);
/*window.addEventListener("mouseout", funcioInici, false);
window.addEventListener("mouseover", funcioInici, false);*/
var count = 1;
function funcioInici(){
    document.onkeydown = funcioCtrl;
    setInterval(cambiarImagenes, 5000);
   /* var oceania = document.getElementById('oceania');
    
    oceania.onmouseout = funcioBorrarTexto;
    oceania.onmouseover = funcioCrearTexto*/
}
/*
function funcioBorrarTexto(){
    
}
function funcioCrearTexto(){

}*/
function cambiarImagenes(){
    
    /*alert(count);*/
    if(count < 3){
       var cabecera = document.getElementById('principales').src = 'cabecera/cabe'+count+'.jpg';
        count = count +1;
    }
    else if(count = 3){
        var cabecera = document.getElementById('principales').src = 'cabecera/cabe'+count+'.jpg';
        count = 1;
    }
    
}
function funcioCtrl(event) {
    if (event.ctrlKey) {
        if (event.keyCode == 66) {
            if(document.getElementById("body").style.background == 'white'){
                
             document.getElementById("body").style.background = 'black';
            }
         else{
             document.getElementById("body").style.background = 'white';
         
        }
    }

}
}

function myFunction(x) {
  x.classList.toggle("change");
}

