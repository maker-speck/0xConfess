const hooks = [
  "You found the key. Look under 'confession #69'.",
  "Check the source of main_router.html at line 133.",
  "Decode the image hash from nft_metadata_3.json.",
  "Only the true holder knows the secret inside truth_loop.mp3.",
  "There’s a hidden route in the router: #glitch"
];

function showClue() {
  const clue = hooks[Math.floor(Math.random() * hooks.length)];
  document.getElementById("arg-clue").textContent = clue;
}
