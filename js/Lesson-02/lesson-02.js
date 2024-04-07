// ! Масиви і функції
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.
const styles = ['Jazz', 'Bluz'];
styles.push('Rock-Roll');
styles.unshift('Tehno');
// styles[1] = 'Classic';
const index = styles.indexOf('Bluz');
styles[index] = 'Classic';
const indx = styles.indexOf('Classic');
if (indx !== -1) {
  styles.splice(indx, 1);
}

console.log(styles.join(' '));
console.log(styles.shift());
console.log(styles);

for (const style of styles) {
  console.log(style);
}
