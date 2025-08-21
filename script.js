//Задание 1

const header = document.querySelector('.title');
const buttonTitle = document.querySelector('.title__button');
buttonTitle.addEventListener('click', () => {
  header.style.display == 'none' ? header.style.display = 'block' : header.style.display = 'none';
})

//Задание 2

const paragraph = document.querySelector('.paragraph');
const colorButton = document.querySelector('.paragraph__button');
colorButton.addEventListener('click', () => {
  paragraph.style.color = '#df34a6';  
});

//Задание 3

const buttonRewrite = document.querySelector('#title__button');
buttonRewrite.addEventListener('click', () => {
  header.textContent = 'Привет, мир!';
})

//Задание 4

const descriptionEls = document.querySelectorAll('.description');
const descriptionBtn = document.querySelector('.description__button');
descriptionBtn.addEventListener('click', () => {
  descriptionEls.forEach(el => {
    el.textContent = 'Измененный текст';
  });
})

//Задание 5

const descriptionBtn1 = document.querySelector('#description__button');
descriptionBtn1.addEventListener('click', () => {
  descriptionEls.forEach(el => {
    el.textContent = 'Новый текст';
  });
});

//Задание 6

const newParagraph = document.createElement('p');
const addItemBtn = document.querySelector('.addItem');
newParagraph.textContent = 'Новый абзац';
addItemBtn.addEventListener('click', () => {
  document.body.appendChild(newParagraph);
});

//Задание 7

const delEl = document.querySelector('.description');
const delItemBtn = document.querySelector('.delItem');
delItemBtn.addEventListener('click', () => {
  delEl.remove();
});