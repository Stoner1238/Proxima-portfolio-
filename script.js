// Back to Top Button
const topButton = document.createElement('button');
topButton.textContent = 'Top';
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';
topButton.style.background = '#007bff';
topButton.style.color = '#fff';
topButton.style.padding = '10px';
topButton.style.border = 'none';
topButton.style.borderRadius = '5px';
topButton.style.cursor = 'pointer';
topButton.style.display = 'none';

document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
});

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});