// ! Arrays and function
//TODO:=========task-1=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, 1, -20];

// //? Answer
// const findSmallerNumber = function (array) {
//   return Math.min(...array);
// };
// //?

// const smallestNumber = findSmallerNumber(numbers);
// console.log(smallestNumber); // 2

// let min = numbers[0];
// for (const num of numbers) {
//   if (min > num) {
//     min = num;
//   }
// }
// console.log(min);

//TODO:=========task-2=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.
// const calculateAverage = function () {
//   let sum = 0;
//   let count = 0;
//   for (const arg of arguments) {
//     if (typeof arg === "number") {
//       sum += arg;
//       count += 1;
//     }
//   }
//   return sum / count;

//   console.log(arguments);
// };
// console.log(calculateAverage(10, 10, 20, 200, "das")); // 60

//TODO:=========task-3=================
const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: true,
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.
// const getAllTitlesOfFilms = function (films) {
//   const newArray = [];
//   for (const film of films) {
//     // console.log(film.title);
//      newArray.push(film.title); 
//   }
  
//   return newArray;
// }
// console.log(getAllTitlesOfFilms(filmoteka));
//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.
//  const findFilmByName = function(films, filmTitle) {
//    for (const film of films) {
//      if (film.title === filmTitle) {
//        return film;
//      } 
//    }
//    return `${filmTitle} Не знайдено`
// }
//  console.log(findFilmByName(filmoteka,"Venom"));
//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.
// const getAdultFilms = function (films) {
//   const newArray = [];
//    for (const film of films) {
//      if (film.adult) {
//        newArray.push(film);
//      }
     
//   }
//   return newArray;
// }
//  console.log(getAdultFilms(filmoteka));
//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.
// const getNotAdultFilms = function (films) {
//   const newArray = [];
//    for (const film of films) {
//      if (!film.adult) {
//        newArray.push(film);
//      }
     
//   }
//   return newArray;
// }
//  console.log(getNotAdultFilms(filmoteka));
//TODO:============task-4===============
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");
// styles.splice(1, 1, "Класика");

// console.log(styles.shift());
// styles.unshift("Реп", "Реггі");
// console.log(styles);
 
//TODO:============task-5==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

//? Answer

//?

// const result = min(10, 5);
// console.log(result); // 5

//TODO:=============task-6=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//? Answer

//?

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:============task-7==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

//? Answer

//?

// logItems(musicGenres);

//TODO:=============task-8=================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

//? Answer

//?

// console.log(formatMessage('Curabitur ligula sapien', 16)); //Повертає 'Curabitur ligula...'.
// console.log(formatMessage('Curabitur ligula sapien', 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.
