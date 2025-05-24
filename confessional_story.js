const sins = [
  "stole liquidity and blamed the devs",
  "repackaged an old meme and claimed originality",
  "bought top, dumped bottom, and lied about it",
  "botched a rug pull and pretended it was a DAO fork",
  "sold a fake NFT for real ETH"
];

function generateStory() {
  const name = prompt("Enter your TRUTH name:");
  const sin = sins[Math.floor(Math.random() * sins.length)];
  const paragraph = `${name} once ${sin} during the peak of the bull run. Their penance? Eternal stake in the Meme Economy.`;
  document.querySelector('.story-output').textContent = paragraph;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('generate-story');
  if (btn) btn.addEventListener('click', generateStory);
});
