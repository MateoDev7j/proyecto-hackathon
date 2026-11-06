/*function checkCollision(elem1,elem2){
    const r1 =getBoundingClienteRct();
}*/
/* COLOR ALEATORIO LOGICA DE CAMBIO DE COLOR DE LA NAVE */
/*let negro="000";
let blanco="fff";
let nave = document.getElementById("nave");
let cambiarColorRandom=Math.floor(Math.random()*(500-1500)+500);
setInterval(cambiarColor,cambiarColorRandom);
function cambiarColor(){
    let array=[blanco,negro];
    nave.style.backgroundColor=array[Math.floor(Math.random()*(0-1)+0)];
}*/
/* LOGICA DE BARRAS CAYENDO  */
/*let muro=document.getElementById("contenedor-muro");

function barrasCayendo(){
    console.log(muro);
    
   let posMuro = muro.getBoundingClientRect();
    let i=0;    
   setInterval(()=>{
   
    i=i+5;
        muro.style.top= (posMuro.top+i )+"px";
        console.log((posMuro.top+i)+"px");
    } ,100);
}
barrasCayendo();*/
// 1. Selección de elementos del DOM
const container = document.getElementById('game-container');
const player = document.getElementById('player');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('high-score');
const gameOverScreen = document.getElementById('game-over-screen');
const restartBtn = document.getElementById('restart-btn');

// 2. Variables de Estado
let playerX = 180;
const playerSpeed = 15;
let score = 0;
let gameOver = false;
let gameInterval;
let bugSpawnInterval;

// 3. Controles del Teclado
document.addEventListener('keydown', (e) => {
  if (gameOver) return;

  if ((e.key === 'ArrowLeft' || e.key === 'a') && playerX > 0) {
    playerX -= playerSpeed;
  }
  if ((e.key === 'ArrowRight' || e.key === 'd') && playerX < container.clientWidth - 40) {
    playerX += playerSpeed;
  }
  
  player.style.left = `${playerX}px`;
});

// 4. Función utilitaria para detectar colisión entre 2 elementos del DOM
function checkCollision(elem1, elem2) {
  const r1 = elem1.getBoundingClientRect();
  const r2 = elem2.getBoundingClientRect();

  return !(
    r1.top > r2.bottom ||
    r1.bottom < r2.top ||
    r1.right < r2.left ||
    r1.left > r2.right
  );
}

// 5. TODO por los alumnos:
// - Función para crear bugs periódicamente (`document.createElement`)
// - Mover los bugs hacia abajo en un intervalo/frame
// - Comprobar colisión con `checkCollision(player, bug)`
// - Actualizar puntuación y gestionar Game Over