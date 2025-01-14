    const targetTime = new Date().getTime() + 10 * 60 * 1000;
function updateTimer() {
const now = new Date().getTime();
const timeLeft = targetTime - now;
if (timeLeft <= 0) {
document.getElementById("timer").textContent = "Time's up!";
clearInterval(interval);
return;
}
const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
document.getElementById("timer").textContent =
`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
const interval = setInterval(updateTimer, 1000);
updateTimer();
