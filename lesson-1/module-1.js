//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
// const a = 10;

// Варіант1
// if (a === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Невірно");
// }
// Варіант2
// a === 10 ? console.log("Вірно") : console.log("Невірно");

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).
// const min = 0;

// if (min >= 0 && min <= 15) {
//   console.log("Перша частина");
// } else if (min > 15 && min <= 30) {
//   console.log("Друга частина");
// } else if (min > 30 && min <= 45) {
//   console.log("Третя частина");
// } else if (min > 45 && min <= 59) {
//   console.log("Четверта частина");
// } else {
//   console.log("Такої частини не існує");
// }

//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 6;
// switch(num) {
//     case 1:
//         console.log("Зима");
//         break;

//     case 2:
//         console.log("Весна");
//         break;

//     case 3:
//         console.log("Літо");
//         break;

//     case 4:
//         console.log("Осінь");
//         break;

//     default:
//         console.log("ТакоЇ пори року не існує");
// }

//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let number = 0;
// while (number <= 50) {
//     console.log(number);
//     number += 1;
// }

//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt("Яка «офіційна» назва JavaScript?").toLowerCase();

// if (question === "ecmascript") {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// const globalMinuts = 69;
// const hours = String(Math.floor(globalMinuts / 60)).padStart(2, 0);
// console.log(hours);

// const minuts = String(globalMinuts % 60).padStart(2, 0);
// console.log(minuts);
// console.log(`${hours}:${minuts}`);

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max
// const max = 10;
// const min = 5;
// let sum = 0;

// for (let i = max; i >= min; i-=1) {
//     console.log(i);

// if (i % 2 === 0) {
//     sum +=i;
// }
// }
// console.log(sum)

//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt('Введіть свій логін');
// if (loginInput === "Адмін") {
// const passwordInput = prompt('Введіть свій пароль');
// if (passwordInput === null) {
//     alert('скасовано')
// } else if (passwordInput === "Я головний") {
//     alert ("Добрий день!")
// } else {
//     alert("Невірний пароль!")
// }
// } else if (loginInput !== "Адмін" && loginInput) {
//     alert("Не вірний логін")
// } else {
//     alert("Я вас не знаю!")
// }

//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// let total = 0; // змінна для зберігання загальної суми
// while (true) {
//     const inputUser = prompt('Введіть число');
  
//     if (inputUser === null) { 
//       break; // вийти з циклу, якщо користувач натиснув кнопку Cancel
//     } else {
//       const number = Number(inputUser); // перетворити введене значення в число
//       total += number; // додати введене число до загальної суми
//     }
//   }
// alert(`Загальна сума введених чисел дорівнює ${total}`); // виведення загальної суми за допомогою alert()

//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt
// let inputUserNumber;

// do {
//   inputUserNumber = prompt('Введите число больше 100');
// } while (inputUserNumber !== null && (isNaN(inputUserNumber) || inputUserNumber <= 100));

// if (inputUserNumber !== null) {
//   alert(`Вы ввели число ${inputUserNumber}`);
// }

//TODO: 11 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'abcde';

// if (str.startsWith('a')) {
//   console.log('так');
// } else {
//   console.log('ні');
// }

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// let number;

// if (number % 3 === 0 && number % 5 === 0) {
//   console.log('fizzbuzz');
// } else if (number % 3 === 0) {
//   console.log('fizz');
// } else if (number % 5 === 0) {
//   console.log('buzz');
// } else {
//   console.log(number);
// }


//TODO: 13 ===================================
// Напишіть if..else, що відповідає наступному switch:

// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;

//   default:
//     alert('We hope that this page looks ok!');
// }

// const browser = 'Opera';

// if (browser === 'Edge') {
//     alert("You've got the Edge!"); 
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }