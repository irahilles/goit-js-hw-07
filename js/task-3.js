const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
const allText = document.querySelector('h1');

nameInput.addEventListener('input', () => {
  
  const trimmedName = nameInput.value.trim();

  if (trimmedName === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = trimmedName;
  }
});
nameInput.style.height = '40px';
nameInput.style.width = '360px';
nameInput.style.paddingLeft = '16px';
nameInput.style.paddingTop = '8px';
nameInput.style.paddingBottom = '8px';
nameInput.style.borderColor = '#808080';
allText.style.fontSize = '24px';
allText.style.fontWeight = '600';
allText.style.lineHeight = '32px';
