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

section.append(divContainer)

// section.prepend(divContainer)
// section.after(divContainer)
// section.before(divContainer)

// section.innerHTML = toString(divContainer);
// section.insertAdjacentHTML('beforeend', divContainer)

// console.log(divContainer);
