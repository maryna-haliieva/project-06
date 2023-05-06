//! function Constructions
//TODO:=================1=========================================================
// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }
// product.showPrice()

// TODO:=================2=========================================================

//Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }

// function callAction(action) {
//     action()
// }

// callAction(product.showPrice.bind(product))

// Anser:

//TODO:=========3==================================================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// Aswer:
// const User = function(param) {
//    const {userName, age, numbersOfPost} = param;
//     this.userName = userName
//     this.age = age
//     this.numbersOfPost = numbersOfPost
//    this.getInfo = function() {
    
//     console.log(`Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`);
// }
  
// }

// User.prototype.getInfo = function() {
    
//   console.log(`Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`);
// }
/**
  |============================
  | Розкоментувати ; )
  |============================
*/
// const polly = new User({ userName: 'Polly', age: 30, numbersOfPost: 15 })
// console.log(polly)
// polly.getInfo()

//TODO:=========4==================================================================
//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// Aswer:
// const Storage = function(itemsArry) {
//   this.items = itemsArry; 
  
// }
// Storage.prototype.getItems = function() {
//   return this.items;  
// }

// Storage.prototype.addItems = function(item) {
//    return this.items.push(item); 
// }

// Storage.prototype.removeItems = function(item) {
//   // return this.items = this.items.filter((el) => el !== item); 
//   const  index = this.items.indexOf(item);
//   console.log(index !== -1);
//   console.log(index);
//   if (index !== -1){
//     this.items.splice(index, 1);

//   } 
//   return this.items;
// }
// /**
//   |============================
//   | Розкоментувати ; )
//   |============================
// */
// const storage = new Storage(['apple', 'banana', 'mango']);

// console.log(storage);
// console.log(storage.removeItems('kivi'));

// console.log(storage.getItems());
//! Class
//TODO:=========1=========================================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const client = new Client('mango', 'mango@gmail.com')

// client.changeEmail = 'mango555@gmail.com'
// console.log(client.getClientData.email)
// client.changeLogin = '12345'
// console.log(client.getClientData.login)

//TODO:=========2=========================================================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// Aswer:

class Notes {
  static Priority() {
    return {
      HIGHT: 'hight',
      LOW: 'low',
  }
  
      
  }
  constructor (){
     this.items = [];

  }
 
  addNote(note) {
    return this.items.push(note);
  }

  removeNote(text) {
    return this.items = this.items.filter((el) => el.text !== text);
  }

  updatePriority({text, newPriority}) {
    return this.items.map((el) => {
      if (el.text === text){
        el.priopity = newPriority; 
      }
     })
  }




}

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

const note1 = new Notes()

note1.addNote({ text: 'Note1', priority: Notes.Priority().LOW })
console.log(note1);
note1.addNote({ text: 'Note2', priority: Notes.Priority().LOW })
console.table(note1.items)

note1.removeNote('Note1')
console.table(note1.items)

note1.updatePriority({ text: 'Note2', newPriority: Notes.Priority().HIGHT })
console.table(note1.items)

//TODO:=========3===================================================================
// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel
//Реалізувати завдання за допомогою ES5 прототипів та ES6 класів

// const HIERARCHY_LEVEL = {
//   TOP: 'top',
//   BOTTOM: 'bottom',
// };

// const workerObj = {
//   name: 'Mango',
//   surname: 'Worker',
//   age: 30,
//   position: 'FE developer',
//   salary: 5000,
// };

/**
  |============================
  | ES5
  |============================
*/

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const worker = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.BOTTOM)
// console.log(worker)
// console.log(worker.getSalary())
// console.log(worker.getHierarchyLevel())

/**
  |============================
  | ES6
  |============================
*/

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const topWorker = new TopLevelWorkerES6(workerObj, HIERARCHY_LEVEL.TOP)
// console.log(topWorker)
// console.log(topWorker.getSalary())
// console.log(topWorker.getHierarchyLevel())
