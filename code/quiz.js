//recupero el botón en una variable
let btnComprobar = document.getElementById("btnComprobar");
//le asigno una función al evento clic del botón
btnComprobar.addEventListener("click", comprobar);

//defino la función comprobar:
function comprobar() {
    //recupero la respuesta 1
    let respuesta1 = document.getElementById("inputP1").value.toUpperCase();
    let imgR1 = document.getElementById("imgR1");
    if (respuesta1 == "PROTOCOLO"){
        imgR1.src = "assets/ok.png";
    }else{
        imgR1.src = "assets/wrong.png";
    }
    imgR1.style.visibility = "visible";
}