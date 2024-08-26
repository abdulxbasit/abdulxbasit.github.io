const coin = document.getElementById('coin');
const tossBtn = document.getElementById('tossBtn');
const result = document.getElementById('result');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

function tossCoin() {
    const random = Math.random();
    const rotation = random < 0.5 ? 'rotateY(180deg)' : 'rotateY(0deg)';
    coin.style.transform = `${rotation} rotateX(1800deg)`;
    
    tossBtn.disabled = true;
    
    setTimeout(() => {
        const outcome = random < 0.5 ? 'Tails' : 'Heads';
        result.textContent = `${outcome}! Player ${currentPlayer} wins this round.`;
        
        if (currentPlayer === 1) {
            player1Score++;
            score1.textContent = player1Score;
        } else {
            player2Score++;
            score2.textContent = player2Score;
        }
        
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        tossBtn.textContent = `Player ${currentPlayer}'s Turn`;
        tossBtn.disabled = false;
    }, 1000);
}

tossBtn.addEventListener('click', tossCoin);