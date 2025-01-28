const refs ={
    statList: document.querySelector('.statList'),
}

refs.statList.addEventListener('click', onStatListBtnClick);

let totalSum = 0;
const statClicks = {};

function onStatListBtnClick(e){
if(e.target.nodeName !== 'BUTTON'){
    return;
}
totalSum += Number(e.target.dataset.number);
 
statClicks[e.target.textContent] = (statClicks[e.target.textContent] || 0) + 1;
console.log(statClicks);
}