//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const updatedNumbers = numbers.map(number => number ** 2);
// console.log('🚀 -> updatedNumbers:', updatedNumbers);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const values = data.flatMap(({ values }) => values);
// console.log('values', values);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const isChild = people.some(({ age }) => age < 20);
// console.log('🚀 -> isChild:', isChild);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10, 9];
// const isEven = numbers.every(number => number % 2 === 0);
// console.log('🚀 -> isEven:', isEven);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 2, 3, 4, 5];
// const biggerNumber = numbers.find(number => number > 3);
// console.log('🚀 -> biggerNumber:', biggerNumber);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3, 11, 22];
// // const ascNumbers = [...numbersArray].sort((a, b) => a - b);
// const ascNumbers = numbersArray.toSorted((a, b) => a - b);

// console.log('🚀 -> ascNumbers:', ascNumbers);
// console.log('🚀 -> numbersArray:', numbersArray);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const strings = ['banana', 'orange', 'apple', 'pear'];
// const sortedInAscStrings = strings.toSorted((a, b) => b.localeCompare(a));

// console.log('🚀 -> sortedInAscStrings:', sortedInAscStrings);

//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sortedByAgeUsers = users.toSorted((a, b) => a.age - b.age);
// console.table(sortedByAgeUsers);

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Mango', age: 40 },
//   { name: 'Banan', age: 50 },
//   { name: 'Yura', age: 99 },
//   { name: 'Jane', age: 5 },
//   { name: 'Bob', age: 19 },
// ];

// const filteredUsers = user
//   .filter(({ age }) => age > 20)
//   .toSorted((a, b) => a.age - b.age)
//   .map(({ name }) => name);

// console.log('🚀 -> filteredUsers:', filteredUsers);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((acc, number) => {
//   console.log('acc', acc);
//   console.log('number', number);
//   console.log('acc + number', acc + number);

//   return acc + number;
// }, 0);

// console.log('🚀 -> total:', total);

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5, 13, 432, 43, 41];
// const avgNumber = arr.reduce((acc, number) => {
//   console.log(typeof acc);

//   return Math.floor(acc + number / arr.length);
// }, 0);
// console.log('🚀 -> avgNumber:', avgNumber);




//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.


// function performOperation(a, b, Callback) {
//   return Callback(a * b);
// }

// function Callback(number) {
//   return number % 2 === 0 ? Math.pow(number, 2) : Math.sqrt(number);
// }

// console.log(performOperation(10, 5, Callback));



//TODO:============task-02=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 3, 6, 7, 9, 20];
// const words = ['apple', 'banana', 'orange', 'pear'];

// function findElement(array, callback) {
//   let result = null;

//   array,array.forEach(element => {
//     if(callback(element) && result === null) {
//       result = element;
//     }
    
//   });
//   return result;
// }

// function isEven(number) {
//   return number % 2 === 0;
  
// }

// function startWithO(str) {
//   return str.toLowerCase().startsWith("o");
// }

// console.log(findElement(numbers, isEven));

// console.log(findElement(words, startWithO)); 


