//seleccion de elementos del DOM
const container = document.getElementById('game-container');
const player = document.getElementById('player');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('high-score');
const gameOverScreen = document.getElementById('game-over-screen');
const restartBtn = document.getElementById('restart-btn');

//variables de Estado
let playerX = 180;
const playerSpeed = 20; 
let score = 0;
let highScore = 0;
let gameOver = false;
let gameInterval;
let bugSpawnInterval;
let bugsArray = []; //array para guardar y controlar los bugs activos

//Controles de teclado
document.addEventListener('keydown', (e) => {
    if (gameOver) return;
    if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') && playerX > 0) {
        playerX -= playerSpeed;
    }
    if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') && playerX < container.clientWidth - 40) {
        playerX += playerSpeed;
    }
    player.style.left = `${playerX}px`;
});
//detectar collisisones
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


//funcion para crear un solo bug
function crearBug() {
    if (gameOver) return;

    let bug = document.createElement("div");
    bug.setAttribute("class", "bug");
    bug.innerHTML = "🐛";
    //aparicion aleatorioa    
    let randomX = Math.floor(Math.random() * (container.clientWidth - 30));
    bug.style.left = randomX + "px";
    bug.style.top = "0px"; //empieza arriba de todo
    
    container.appendChild(bug);
    bugsArray.push(bug); //se guarda en la lista
}

function gameLoop() {
    if (gameOver) return;

    for (let i = bugsArray.length - 1; i >= 0; i--) {
        let bug = bugsArray[i];
        
        let currentTop = parseInt(bug.style.top) || 0;
        let newTop = currentTop + 4; 
        bug.style.top = newTop + "px";

        if (checkCollision(player, bug)) {
            finalizarJuego();
            return;
        }

        if (newTop > container.clientHeight) {
            bug.remove(); 
            bugsArray.splice(i, 1); 
            score++;
            scoreEl.textContent = score;
        }
    }
}
function iniciarJuego() {
    bugsArray.forEach(bug => bug.remove());
    bugsArray = [];
    score = 0;
    scoreEl.textContent = score;
    playerX = 180;
    player.style.left = `${playerX}px`;
    gameOver = false;
    gameOverScreen.classList.add('hidden');
    gameInterval = setInterval(gameLoop, 1000 / 60); 
    bugSpawnInterval = setInterval(crearBug, 1500);  
  }

function finalizarJuego() {
    gameOver = true;
    clearInterval(gameInterval);
    clearInterval(bugSpawnInterval);
    
    if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
    }
    
    gameOverScreen.classList.remove('hidden');
}

restartBtn.addEventListener('click', iniciarJuego);
iniciarJuego();
