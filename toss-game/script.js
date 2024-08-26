const coin = document.getElementById('coin');
const tossBtn = document.getElementById('tossBtn');
const result = document.getElementById('result');
const option1Input = document.getElementById('option1');
const option2Input = document.getElementById('option2');
const sideAText = document.getElementById('sideAText');
const sideBText = document.getElementById('sideBText');

function updateCoinText() {
    sideAText.textContent = option1Input.value || 'Option 1';
    sideBText.textContent = option2Input.value || 'Option 2';
}

option1Input.addEventListener('input', updateCoinText);
option2Input.addEventListener('input', updateCoinText);

function tossCoin() {
    const option1 = option1Input.value.trim() || 'Option 1';
    const option2 = option2Input.value.trim() || 'Option 2';

    if (option1 === option2) {
        result.textContent = "Please enter two different options.";
        return;
    }

    const random = Math.random();
    const rotations = 5 + Math.floor(Math.random() * 5); // 5 to 9 rotations
    const degree = rotations * 360 + (random < 0.5 ? 0 : 180);

    coin.style.transform = `rotateY(${degree}deg)`;
    tossBtn.disabled = true;
    result.textContent = "Tossing...";

    setTimeout(() => {
        const winningOption = random < 0.5 ? option1 : option2;
        result.innerHTML = `<span class="winner">Winner: ${winningOption}</span>`;
        tossBtn.disabled = false;
    }, 3000);
}

tossBtn.addEventListener('click', tossCoin);

// Initialize coin text
updateCoinText();