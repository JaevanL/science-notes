let score = 0;
const circle = document.getElementById("circle");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");

circle.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  // Get game area size
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;

  // Compute new random position
  const x = Math.random() * (areaWidth - 100);
  const y = Math.random() * (areaHeight - 100);

  // Move the circle
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
});

