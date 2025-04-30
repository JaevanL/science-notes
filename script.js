let score = 0;
const circle = document.getElementById("circle");
const scoreDisplay = document.getElementById("score");

circle.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  // Move to a random position
  circle.style.position = "absolute";
  circle.style.top = Math.random() * (window.innerHeight - 100) + "px";
  circle.style.left = Math.random() * (window.innerWidth - 100) + "px";
});

