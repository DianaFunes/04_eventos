//-------------------------------------------------------------------------------------------------
    // Cambiar fondo de Header y Body
let cabecera =document.getElementsByTagName('header');
//color oscuro
function dark(){
    cabecera[0].style.backgroundColor = '#6bb3b3';
    cabecera[0].classList.remove('ligero');
    document.body.style.backgroundColor = '#6bb3b3';
}
//color ligero
document.getElementById('capa02').addEventListener('click', light);
function light(){
    cabecera[0].style.backgroundColor = '#9999ff';
    cabecera[0].classList.add('ligero');
    document.body.style.backgroundColor = '#9999ff';
}
document.getElementById('capa03').addEventListener('click', function(){life()});
let life = function(){
    cabecera[0].style.backgroundColor = '#ff9cb1';
    cabecera[0].classList.remove('ligero');
    document.body.style.backgroundColor = '#ff9cb1';
}
//Tamaño de fuente y posicion

//tamaño
let dimension = function(){
    let fuente = document.getElementById("tamanio").value;
    document.getElementById('texto').className = "texto";
    document.getElementById('texto').classList.add(fuente);
}

//mover texto sobre eje x y yl
var textMover = document.getElementById("texto");
function arriba(){
    textMover.style.top = (textMover.offsetTop - 10) + "px";
}
function abajo(){
    textMover.style.top = (textMover.offsetTop + 10) + "px";
}
function izquierda(){
    textMover.style.left = (textMover.offsetLeft - 10) + "px";
}
function derecha(){
    textMover.style.left = (textMover.offsetLeft + 10) + "px";
}

//saludo 
function verMensaje(){
    document.getElementById('mensaje').classList.add('mostrarMensaje');

}

function ocultarMensaje(){
    document.getElementById('mensaje').className = 'mensaje';
}

//cambiar imagen
let cambiarImagen = function(foto, frase){
    document.getElementById("foto").src = " image/" + foto + ".png";
    document.getElementById("mensaje").innerText = frase;
}

let msj = document.getElementById("entrada");
function nuevoMsj(){
        var nMsj = document.getElementById("entrada").value;
            mensaje.innerHTML = nMsj;
}