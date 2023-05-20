//TODO:====================01===========================Модальне вікно=============================================================================
/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку"
  |  2 - Реалізувати закриття модального вікна по кліку на "кнопку", "ESC" і "бекдроп". Не забувай знімати слухача події після закриття модального вікна
  |  Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати. 
  |  - Створи 4 функції onOpenModalBtnElClick, closeModalWindow, onEscClick, onBackdropClick. Не забувай робити перевірку на цільовий елемент. 
  |  - Клас який відповідає за ,відображення і скриття модального вікна "is-open"
  |
  |  Виконай рефакторінг коду і зроби відкриття модального вікна за допомогою бібліотека "basicLightbox". Не забуть підключити скрипти і стилі у файл "index.html".
  |============================

 // ВАРІАНТ 1
*/
// const btnOpenModalEl = document.querySelector(".js-modal-open");
// const btnCloseModalEl = document.querySelector(".js-modal-close");
// const backDropEl = document.querySelector(".js-backdrop");
// const bodyEl = document.querySelector("body");
// //fuctions

// const onOpenModalBtnElClick = () => {
//   bodyEl.style.overflow = "hidden";
//   backDropEl.classList.add("is-open");
//   window.addEventListener("keydown", onEscClick);
//   window.addEventListener("click", onBackdropClick);
// };

// const closeModalWindow = () => {
//   bodyEl.style.overflow = "visible";
//   backDropEl.classList.remove("is-open");
//   window.removeEventListener("keydown", onEscClick);
//   window.removeEventListener("click", onBackdropClick);
// };

// const onEscClick = (e) => {
//   if (e.code !== "Escape") {
//     return;
//   }

//   closeModalWindow();
// };

// const onBackdropClick = (e) => {
//   if (e.target !== backDropEl) {
//     return;
//   }
//   closeModalWindow();
// };

// //Collslisters
// btnOpenModalEl.addEventListener("click", onOpenModalBtnElClick);
// btnCloseModalEl.addEventListener("click", closeModalWindow);

// ВАРІАНТ 2

const btnOpenModalEl = document.querySelector(".js-modal-open");
const bodyEl = document.querySelector("body");

//fuctions
const instance = basicLightbox.create(`
    <div class="modal">
        <button type="button" class="close-btn js-modal-close">X</button>

        <form class="login-form js-modal__form">
          <label>
            Name
            <input type="text" name="name" placeholder="enter your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="enter your email" />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="enter your password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
`);

function onOpenModalBtnElClick() {
  instance.show();
  bodyEl.style.overflow = "hidden";

  document
    .querySelector(".js-modal-close")
    .addEventListener("click", closeModalWindow);
  document
    .querySelector(".js-modal__form")
    .addEventListener("submit", onSubmit);

  window.addEventListener("keydown", onEscClick);
}

function closeModalWindow() {
  bodyEl.style.overflow = "visible";
  instance.close();

  window.removeEventListener("keydown", onEscClick);
}

function onEscClick(e) {
  if (e.code !== "Escape") {
    return;
  }

  closeModalWindow();
}

//Collslisters
btnOpenModalEl.addEventListener("click", onOpenModalBtnElClick);

/**
  |============================
  | Робота з формою:
  | 1 - Реалізуй відправку данних через подію "submit" на формі
  | 2 - Зроби перевірку на заповнення інпутів "email" і "password". Вони не повинні бути пустими. Поле "name", може бути пустим для приватності користувача 
  | виводь про це в повідемленні за допомогою метода "alert" - "email or password is empty"
  | 3 - При відправки форми в консоль виведи обьект з данними користувача. Реалізуй перевірку, якщо еористувач не ввів імʼя, записуй в обьект рядок "Anonimus"
  |
  | Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  |  - Повісь слухача події на форму
  |  - Пропиши колбєк функцію onSubmit. Не забувай про відміну поведінки по змовчуванню. Значення інпутів знайди за допомогою currentTarget і його elements.
  |  - Після отправки почисти форму і реалізуй автоматичне закриття модального вікна
  |============================

  //ВАРІАНТ 1
*/
// const formEl = document.querySelector(".js-modal__form");

// const onSubmit = (e) => {
//   e.preventDefault();

//   const {
//     elements: { name, email, password },
//   } = e.currentTarget;

//   if (!email.value || !password.value) {
//     alert("email or password is empty");
//     return;
//   }

//   const userData = {
//     name: name.value || "Anonimus",
//     email: email.value,
//     password: password.value,
//   };

//   console.log(userData);

//   // formEl.reset();
//   // або
//   e.currentTarget.reset();
//   closeModalWindow();
// };

// formEl.addEventListener("submit", onSubmit);

// ВАРІАНТ 2

function onSubmit(e) {
  e.preventDefault();

  const {
    elements: { name, email, password },
  } = e.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    alert("email or password is empty");
    return;
  }

  const userData = {
    name: name.value || "Anonimus",
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(userData);

  e.currentTarget.reset();
  closeModalWindow();

  setTimeout(() => {
    alert("Дякуємо за реєстрацію!");
  }, 1000);
}

//TODO:====================02====================================TODOS============================================================================================
/**
  |============================
  | Список справ todos:
  | 1 - Напиши скрипт для застосунку todos. Реалізуй методи додавання та видалення щоденних справ.
  | 2 - Реалізуй перевірку на неможлівість додати пусту справу до списку справ. 
  | Виконуй завдвння послідовно: 
  | - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  | - Додай слухачі подій з відповідними подіями
  | - Пропиши три функції, які тобі допоможуть це реалізувати 
  | - Функція обробник на додавання елементів "onClickSubmit". Її завдання, зчитати значення з інпуту, виконай за допомогою "currentTarget.elements", також не забувай
  | про метод trim(), який видаляє пробіли. Ця функція повинна робити перевірку на пустий інпут, створювати обьект, додавати до масиву нову todos і чистити інпут. Також
  | запускати функцію рендера сторінкі.
  | - Функція "onBtnClick", яка буде видаляти todos. Вона повинна знайти id todos, яку потрібно видалити. Значення id можно считати з дата атрибуту за допомогою 
  | "target.dataset.id", але не забувай, що там буде рядок і можно використати метод "parseInt". Для видалення можно використати метод "filter". Після видалення ми 
  | повинні відрендорити сторінку за допомогою функції "updateList".
  | - І сама функція "updateList". Ії завдання створити розмітку за допомого метода createElement і setAttribute, додати на сторінку за допомогою метода "append". Не 
  | забувай чистити розмітку перед її вставкою.
  |============================
*/
