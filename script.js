fetch('gen/prompt.txt')
  .then(response => response.text())
  .then(data => {
    const footerText = document.getElementById('prompt');
    footerText.innerText = data;
  });
  