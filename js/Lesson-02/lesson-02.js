// ! Масиви і функції
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ['Jazz', 'Bluz'];
// styles.push('Rock-Roll');
// styles.unshift('Tehno');
// // styles[1] = 'Classic';
// const index = styles.indexOf('Bluz');
// styles[index] = 'Classic';
// const indx = styles.indexOf('Classic');
// if (indx !== -1) {
//   styles.splice(indx, 1);
// }

// console.log(styles.join(' '));
// console.log(styles.shift());
// console.log(styles);

// for (const style of styles) {
//   console.log(style);
// }



//TODO:============task-05==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа


// function min(a = 10, b = 5) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number";
//   }
//   return Math.min(a,b);
// }


// console.log(min(9, 10));





//TODO:=========task-06=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.


// function calculateAverage() {
//   let total = 0;
//   let count = 0;

//   for (const arg of arguments) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     total += arg;
//     count += 1;
//   }
//   return Math.floor(total / count);
// }


// console.log(calculateAverage(5, 5, "true"));
// console.log(calculateAverage(5, 65, 44, 23, 2));// * Літерал об'єкта


//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

const human = { 
    userName: "Bob", 
    hobby: "Football",
    age: 30,
    greet() {
        console.log(`hello ${this.userName}`);
    }
}
// console.log(human.userName);
// console.log(human.greet());
// console.log(human["hobby"]);
// human.mood = "happy";
// human.hobby = "skydiving";
// console.log(human);

const newHuman = Object.create(human);
newHuman.userName = "Mango";

// console.log(newHuman.greet());

// window.console.log(1);
for (const key in newHuman) {
    if (newHuman.hasOwnProperty(key)) {
       console.log(key); 
    }
    }
