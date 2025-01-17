const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(category=> {
    const categoryTitle = category.querySelector('h2').textContent;
    const elementCount = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementCount}`);
});
const categories = document.getElementById('categories');
categories.style.listStyle = 'none'; 
categories.style.margin = '0';
categories.style.display = 'flex';
categories.style.flexDirection = 'column';
categories.style.gap = '24px';
categories.style.fontFamily = 'Montserrat';

const headers = document.querySelectorAll('#categories .item h2');
headers.forEach(header => {
    header.style.fontSize = '24px';
    header.style.fontWeight = '600';
    header.style.margin = '0';
    header.style.marginBottom = '16px';
    header.style.marginLeft = '36px';
    header.style.padding = '0';
});
const text = document.querySelectorAll('#categories .item li');
text.forEach(elem=> {
    elem.style.fontSize = '16px';
    elem.style.fontWeight = '400';
    elem.style.listStyleType = 'none';
    elem.style.margin = '0';
    elem.style.padding = '0';
    elem.style.textAlign = 'left';
    elem.style.border = '1px solid #808080'; 
    elem.style.borderRadius = '4px';
    elem.style.paddingLeft = '16px';
    elem.style.paddingTop = '8px';
    elem.style.paddingBottom = '8px';
});

categoriesList.forEach(item => {
    const nestedUl = item.querySelector(':scope > ul');
    
    if (nestedUl) {
      nestedUl.classList.add('list');
    }
  });

