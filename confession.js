const truths = [
  "I once sold all my crypto for Dogecoin.",
  "I pretend to understand gas fees.",
  "I faked a Discord rugpull for engagement.",
  "I farm karma with AI-generated memes.",
  "I burned tokens just to feel something."
];

function randomConfession() {
  const output = document.querySelector('.output');
  const truth = truths[Math.floor(Math.random() * truths.length)];
  output.textContent = '> ' + truth;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input');
  input.placeholder = '> type or press ` to auto-confess';
  document.addEventListener('keydown', e => {
    if (e.key === '`') {
      randomConfession();
    }
  });
});
