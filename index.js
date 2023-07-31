function updateTime() {
const now = new Date();
const hours= String(now.getHours()).padStart(2, '0');
const minutes= String(now.getMinutes()).padStart(2, '0');
const seconds= String(now.getSeconds()).padStart(2, '0');

const timeDisplay = document.getElementById('timeDisplay');
timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
    updateTime();
    setInterval(updateTime, 1000);
}

startClock();