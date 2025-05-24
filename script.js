document.querySelector('.input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const output = document.querySelector('.output');
    output.textContent = '> ' + this.value;
    this.value = '';
  }
});
