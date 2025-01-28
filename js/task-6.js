
const refs = {
  input: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onCreateBtnClick);
function onCreateBtnClick(){
  const inputValue = Number(refs.input.value);
  refs.input.value = '';
 if(inputValue<1 || inputValue>100){
 alert ('Put valid number');
 return;
 }
 createBoxes(inputValue);
}

refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
function onDestroyBtnClick(){
  destroyBoxes();
}

function createBoxes(amount){
  destroyBoxes();
  let sizes = 30;
  let elements = [];
  for(let i = 0; i< amount; i++) {
const div = document.createElement('div');
div.style.width = `${sizes}px`;
div.style.height = `${sizes}px`;
div.style.backgroundColor = getRandomHexColor();
elements.push(div);
sizes += 10;
  }
  refs.boxes.append(...elements);
}

function destroyBoxes(){
  refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}