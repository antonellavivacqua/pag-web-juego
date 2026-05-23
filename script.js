const words = [
  'californication','plataforma5','black','summer','flea','aeroplane','peppers',
  'unlimited','arcadium','love','getaway','stadium','quixoticelixer','quarter',
  'snow','dylan','zephyr','funky','chili'
];

const randomWordEl = document.getElementById('randomWord');
const textInput = document.getElementById('text');
const timeSpan = document.getElementById('timeSpan');
const scoreEl = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');
const mainContainer = document.querySelector('.main');

let palabraAleatoria;
let time = 10;
let score = 0;

function randomWords() {
  return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
  palabraAleatoria = randomWords();
  randomWordEl.textContent = palabraAleatoria;
}


function actualizarTiempo() {
  time--;
  timeSpan.textContent = time + 's';
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function updateScore() {
  score++;
  scoreEl.textContent = score;
}


function gameOver() {
  mainContainer.remove(); 
  endGameContainer.innerHTML = `
    <h2>⏰ Se acabó el tiempo!</h2>
    <p>✅ Tu puntaje final es: ${score}</p>
    <button onclick="location.reload()">Reiniciar</button>
  `;
}


textInput.addEventListener('input', (e) => {
  const palabraIngresada = e.target.value.trim();
  if (palabraIngresada === palabraAleatoria) {
    addToDOM();
    updateScore();
    e.target.value = '';
    time += 3; // suma 3 segundos
    timeSpan.textContent = time + 's';
  }
});


addToDOM();
const timeInterval = setInterval(actualizarTiempo, 1000);