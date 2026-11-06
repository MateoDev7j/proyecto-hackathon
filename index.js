function checkCollision(elem1,elem2){
    const r1 =getBoundingClienteRct();
}
/* COLOR ALEATORIO LOGICA DE CAMBIO DE COLOR DE LA NAVE */
let negro="000";
let blanco="fff";
let nave = document.getElementById("nave");
let cambiarColorRandom=Math.floor(Math.random()*(500-1500)+500);
setInterval(cambiarColor,cambiarColorRandom);
function cambiarColor(){
    let array=[blanco,negro];
    nave.style.backgroundColor=array[Math.floor(Math.random()*(0-1)+0)];
}
/* LOGICA DE BARRAS CAYENDO  */
muro=document.getElementById("contenedor-muro");

async function barrasCayendo(){
    setInterval(()=>muro.style.top=,1000);
}