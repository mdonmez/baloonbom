let score = 0;
let timeLeft = 10;
let gameActive = true;

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 50%)`;
}

function createBalloon() {
    if (!gameActive) return;
    
    const balloon = document.createElement('img');
    balloon.src = 'balloon.svg';
    balloon.className = 'balloon';
    balloon.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    balloon.style.left = Math.random() * (window.innerWidth - 50) + 'px';
    
    balloon.addEventListener('click', () => {
        if (!gameActive) return;
        score++;
        document.getElementById('score').textContent = score;
        balloon.classList.add('pop-effect');
        setTimeout(() => balloon.remove(), 300);
    });

    document.getElementById('game-area').appendChild(balloon);
    setTimeout(() => balloon.remove(), 3000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    
    if (timeLeft <= 0) {
        gameActive = false;
        alert(`Game Over! Your score: ${score}`);
        location.reload();
    }
}

// Start game
setInterval(createBalloon, 500); // Creates 2 balloons per second
const timer = setInterval(updateTimer, 1000);