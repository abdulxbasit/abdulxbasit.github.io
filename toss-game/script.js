const coin = document.getElementById('coin');
const tossBtn = document.getElementById('tossBtn');
const currentToss = document.getElementById('currentToss');
const finalResult = document.getElementById('finalResult');
const option1Input = document.getElementById('option1');
const option2Input = document.getElementById('option2');
const tossCountSelect = document.getElementById('tossCount');
const sideAText = document.getElementById('sideAText');
const sideBText = document.getElementById('sideBText');

function updateCoinText() {
    sideAText.textContent = option1Input.value || 'Option 1';
    sideBText.textContent = option2Input.value || 'Option 2';
}

option1Input.addEventListener('input', updateCoinText);
option2Input.addEventListener('input', updateCoinText);

async function tossCoin() {
    const option1 = option1Input.value.trim() || 'Option 1';
    const option2 = option2Input.value.trim() || 'Option 2';
    const tossCount = parseInt(tossCountSelect.value);

    if (option1 === option2) {
        finalResult.textContent = "Please enter two different options.";
        return;
    }

    tossBtn.disabled = true;
    let option1Wins = 0;
    let option2Wins = 0;

    for (let i = 1; i <= tossCount; i++) {
        const random = Math.random();
        const rotations = 5 + Math.floor(Math.random() * 5);
        const degree = rotations * 360 + (random < 0.5 ? 0 : 180);

        coin.style.transform = `rotateY(${degree}deg)`;
        currentToss.textContent = `Toss ${i} of ${tossCount}...`;

        await new Promise(resolve => setTimeout(resolve, 1000));

        const winner = random < 0.5 ? option1 : option2;
        if (winner === option1) option1Wins++;
        else option2Wins++;

        currentToss.textContent = `Toss ${i} result: ${winner}`;
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    const overallWinner = option1Wins > option2Wins ? option1 : option2;
    const winCount = Math.max(option1Wins, option2Wins);

    finalResult.innerHTML = `
        <span class="winner">Overall Winner: ${overallWinner}</span><br>
        (Won ${winCount} out of ${tossCount} tosses)<br>
        ${option1}: ${option1Wins} wins, ${option2}: ${option2Wins} wins
    `;

    tossBtn.disabled = false;
}

tossBtn.addEventListener('click', tossCoin);

// Initialize coin text
updateCoinText();