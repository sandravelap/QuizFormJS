//recupero el botón en una variable
let btnComprobar = document.getElementById("btnComprobar");
//le asigno una función al evento clic del botón
btnComprobar.addEventListener("click", comprobar);
//recupero el botón de limpiar
let btnLimpiar = document.getElementById("btnLimpiar");
//y le asigno su función:
btnLimpiar.addEventListener("click", limpiar);
//defino la función comprobar:
function comprobar() {
    //creamos una variable booleana para saber si el usuario gana
    //de entrada gana y si hay algo mal se cambia a false
    let win = true;
    //recupero la respuesta 1
    
    let respuesta1 = document.getElementById("inputP1").value.toUpperCase();
    let imgR1 = document.getElementById("imgR1");
    if (respuesta1 == "PROTOCOLO"){
        imgR1.src = "assets/ok.png";
    }else{
        imgR1.src = "assets/wrong.png";
        win = false;
    }
    imgR1.style.visibility = "visible";

    //recupero la respuesta 2 del usuario y compruebo si es correcta y muestro la imagen que toca
    let respuesta2 = document.getElementById("inputP2").value.toUpperCase();
    let imgR2 = document.getElementById("imgR2");
    if (respuesta2 == "JAVASCRIPT"){
        imgR2.src = "assets/ok.png";
    }else{
        imgR2.src = "assets/wrong.png";
        win=false;
    }
    imgR2.style.visibility = "visible";

    //si todas las respuetas son correctas win=true y le doy el trofeo
    if (win==true){
        //creo el div que va a contener el trofeo
        let divTrofeo = document.createElement("div");
        //creo la etiqueta img donde va la imagen del trofeo
        let imgTrofeo = document.createElement("img");
        //creo la variable que corresponde a main para luego poder poner el hijo div
        let mains = document.getElementsByTagName("main");
        //sólo tengo un main y es el primero del array de mains recuperado
        let miMain = mains[0];
        //pongo la ruta del trofeo en el src del elemento img
        imgTrofeo.src = "assets/trofeo.png";
        //cologo imgTrofeo en su sitio (hijo del divTrofeo)
        divTrofeo.appendChild(imgTrofeo);
        //pongo divTrofeo como hijo de main
        miMain.appendChild(divTrofeo);
        divTrofeo.id ="divTrofeo"
    }
}

function limpiar(){
    //recuperamos las imágenes de respuestas para hacerlas invisibles de nuevo
    let imgsRs = document.getElementsByClassName("imgsRs");
    //recorro el array de elementos img con class imgsRs
    //haciendo uso de la variable img
    for (img of imgsRs){
        img.style.visibility = "hidden";
    }
    //recupero el div que contiene el trofeo y lo elimino
    let divTrofeo = document.getElementById("divTrofeo");
    divTrofeo.remove();

}