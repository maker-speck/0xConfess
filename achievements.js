const achievements = [
  { title: "First Confession", unlocked: false },
  { title: "Memelord", unlocked: false },
  { title: "DAO Ghost", unlocked: false },
  { title: "Eco-Kink Winner", unlocked: false },
  { title: "Glitch Finder", unlocked: false }
];

function unlockAchievement(index) {
  if (!achievements[index].unlocked) {
    achievements[index].unlocked = true;
    const log = document.getElementById("achievements-log");
    const entry = document.createElement("div");
    entry.textContent = "🏆 " + achievements[index].title + " unlocked!";
    log.appendChild(entry);
  }
}
