let xp = 0;
let level = 1;

function gainXP(amount) {
  xp += amount;
  const xpDisplay = document.getElementById("xp");
  const levelDisplay = document.getElementById("level");
  if (xp >= level * 100) {
    xp -= level * 100;
    level += 1;
  }
  xpDisplay.textContent = xp + " XP";
  levelDisplay.textContent = "Level " + level;
}
