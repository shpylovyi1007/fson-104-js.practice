//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const section = document.querySelector('section');
const boxes = 100;
const divContainer = document.createElement('div');
divContainer.classList.add('number-container');

const randomNumber = () => Math.floor(Math.random() * boxes) + 1;

// const fragment = document.createDocumentFragment();

for (let i = 0; i < boxes; i++) {
  const div = document.createElement('div');
  div.classList.add('number');

  div.textContent = randomNumber();

  div.textContent % 2 === 0
    ? div.classList.add('even')
    : div.classList.add('odd');

  //   fragment.appendChild(div);

  divContainer.appendChild(div);
}

section.append(divContainer);

// section.prepend(divContainer)
// section.after(divContainer)
// section.before(divContainer)

// section.innerHTML = toString(divContainer);
// section.insertAdjacentHTML('beforeend', divContainer)

// console.log(divContainer);

//TODO:=========task-03=================

//  *!  Form Events, Input, Focus, Blur and Submit.

// *? Викоритовуй шаблон форми з файлу html.

// ** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

// ** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green

const input = document.querySelector('.js-username-input');

// input.addEventListener('input', event => {
//   // console.log(event.target.value);

//   if (event.target.value.length > 6) {
//     event.target.classList.add('success');
//     event.target.classList.remove('error');
//   } else {
//     event.target.classList.remove('success');
//     event.target.classList.add('error');
//   }
// });

// input.addEventListener('focus', onFocus);
// function onFocus(event) {
//   if (event.target.value.trim()) {
//     event.target.style.outline = '3px solid green';
//   } else {
//     event.target.style.outline = '3px solid red';
//   }
// }

// const form = document.querySelector('.js-contact-form');
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   // const input = event.currentTarget.elements.userName.value.trim();
//   // const checkbox = event.currentTarget.elements.accept;
//   const { userName, accept } = event.currentTarget.elements;
//   if (!userName.value.trim() || !accept.checked) {
//     return alert('input is empty');
//   }

//   const userData = { userName: userName.value }
//   console.log(userData);
//   event.currentTarget.reset();
// });

//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const list = document.querySelector('.js-accordion-list');

list.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;
  const curentButton = event.target;
  curentButton.nextElementSibling.classList.toggle('active');
});