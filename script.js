fetch('gen/prompt.txt')
  .then(response => response.text())
  .then(data => {
    const promptText = document.getElementById('prompt-text');
    promptText.innerText = data;
  });
  