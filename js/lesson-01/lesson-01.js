//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "abcde";
// if (str.startsWith('a')) {
//     console.log('так');
// } else {
//     console.log('ні');
// }

// str.startsWith('a') ? console.log('так') : console.log('ні');

//TODO: 2 ===================================

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// const firstName = 'Віктор';
// const lastName = 'Сташко';
// const totalLetters = firstName.length + lastName.length;

// if (firstName.length > 4 && lastName.length > 5) {
//     console.log(totalLetters);
// } else {
//     console.log('неможливо виконати умову');
// }

// firstName.length > 4 && lastName.length > 5
//     ? console.log(totalLetters)
//     : console.log('неможливо виконати умову');

//TODO: 3 ===================================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const num = prompt('Enter number');

// if (num >= 55 && num <= 99) {
//   alert('Число потрапляє в діапазон');
// } else {
//   alert('Число не потрапляє в діапазон');
// }

// num >= 55 && num <= 99
//   ? alert('Число потрапляє в діапазон')
//   : alert('Число не потрапляє в діапазон');

//TODO: 4 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const maksymAge = 61;

// if (maksymAge >= 0 && maksymAge <= 16) {
//   console.log('діти');
// } else if (maksymAge > 16 && maksymAge <= 60) {
//   console.log('дорослі');
// } else if (maksymAge >= 61 && maksymAge <= 100) {
//   console.log('пенсіонери');
// } else {
//   console.log('Error');
// }

//TODO: 5 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt('Choise drink').toLowerCase();

// function orderDrink(drinkName) {
//   let price;
//   switch (drinkName) {
//     case 'coffe':
//       price = 40;
//       break;

//     case 'tea':
//       price = 25;
//       break;

//     case 'juce':
//       price = 50;
//       break;

//     default:
//       alert('Error');
//   }
//   return `Your order total price: ${price}UAH`;
// }

// alert(orderDrink(drink));
