function checkCollision(elem1,elem2){
    const r1 =getBoundingClienteRct();
}
let negro="000";
let blanco="fff";
let nave = document.getElementById("nave");
let cambiarColorRandom=Math.floor(Math.random()*(500-1500)+500);
setInterval(cambiarColor,cambiarColorRandom);
function cambiarColor(){
    let array=[blanco,negro];
    nave.style.backgroundColor=array[Math.floor(Math.random()*(0-1)+0)];
}