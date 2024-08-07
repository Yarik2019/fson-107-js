//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const divContainer = document.createElement("div");
divContainer.classList.add("number-container");
const dom = document.body;

const boxs = 200;

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
for (let i = 0; i < boxs; i++) {
  const box = document.createElement("div");
  const randoms = randomNumber();
  box.classList.add("number");
  box.textContent = randoms;
  if (randoms % 2 === 0) {
    box.classList.add("even");
  } else {
    box.classList.add("odd");
  }
  divContainer.appendChild(box);
}

dom.prepend(divContainer);

//TODO:=========task-02=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

** 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
 */

// const formEl = document.querySelector(".js-contact-form");

// formEl.addEventListener("input", onFormInput);

// function onFormInput(event){
//   const inputValue = event.target.value.trim();
//   if (inputValue.length > 6) {
//     event.target.classList.add("success");
//     event.target.classList.remove("error");

//   } else {
//     event.target.classList.remove("success");
//     event.target.classList.add("error");
//   }
// }

// const inputField = document.querySelector(".js-username-input")
// inputField.addEventListener("focus", onFocus);

// function onFocus(event) {
//   const target = event.target;

//   !target.value.trim() ? target.style.outline = '3px solid red' : target.style.outline = '3px solid green';

// if (!target.value.trim()) {
//   target.style.outline = '3px solid red';
// } else {
//   target.style.outline = '3px solid green';
// }
// }

const inputFild = document.querySelector(".js-username-input");
inputFild.addEventListener("blur", onBlur);

function onBlur(event) {
  const target = event.target;

  !target.value.trim()
    ? (target.style.outline = "3px solid red")
    : (target.style.outline = "3px solid green");
}

const formEl = document.querySelector(".js-contact-form");
const spanEl = document.querySelector(".js-username-output");

formEl.addEventListener("submit", onSubmit);
formEl.addEventListener("input", onInput);

function onSubmit(event) {
  event.preventDefault();
  const checkBox = event.currentTarget.elements.accept.checked;
  const userInput = event.currentTarget.elements.userName;

  if (!userInput.value.trim() || !checkBox) {
    return alert("Введіть дані");
  }

  console.log({ userName: userInput.value.trim() });
  event.currentTarget.reset();
  spanEl.textContent = "Anonimus";
  userInput.style.border = "1px solid #cccccc";
  userInput.style.outline = "none";
}

function onInput(event) {
  const inputValue = event.currentTarget.elements.userName.value.trim();
  spanEl.textContent = inputValue;
  if (!inputValue) {
    spanEl.textContent = "Anonimus";
  }
}

//TODO:=========task-03=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

//TODO:=========task-04=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

const filmList = document.querySelector(".js-film-list");

function createMarkup(array) {
  return array
    .map(
      (film) => `<li id="${film.id}">
     <img src="${film.imgUrl}" alt="${film.title}" />
     <p>${film.title}</p>
</li>`
    )
    .join();
}

filmList.innerHTML = createMarkup(films);
// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

const watchedFilms = ["film_2", "film_4", "film_5"];

watchedFilms.forEach((id) => {
  const film = filmList.querySelector(`#${id}`);
  if (film) {
    film.style.opacity = 0.5;
  }
});

//fff

//TODO:=========task-05======Modal window===========
/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку".
  |  2 - Реалізувати закриття модального вікна по кліку на крестик і по "ESC". Не забувай знімати слухача події "keydown" після закриття модального вікна.
  |  Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати. 
  |  - Створи 3 функції onOpenModalBtnElClick, closeModalWindow, onEscClick. Не забувай робити перевірку на цільовий елемент. 
  |  - Відображення модельного вікна реалізуй заа допомогою бібліотеки basicLightbox і його метода "basicLightbox.create".
  |============================
  
*/
const btn = document.querySelector(".js-modal-open");
btn.addEventListener("click", onClick);
function onClick(event) {
  const instance = basicLightbox.create(`
     <div class="modal">
  <button type="button" class="close-btn js-modal-close">
    X
  </button>

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
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
    </label>
    <button class="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
   
`);

  instance.show();
}

/**
  |============Розмітка для модального вікна================
  <div class="modal">
  <button type="button" class="close-btn js-modal-close">
    X
  </button>

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
      <input
        type="password"
        name="password"
        placeholder="enter your password"
      />
    </label>
    <button class="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
  |============================
*/

/**
  |============================
  | Робота з формою:
  | 1 - Реалізуй відправку данних через подію "submit" на формі
  | 2 - Зроби перевірку на заповнення інпутів "email" і "password". Вони не повинні бути пустими. Поле "name", може бути пустим для приватності користувача 
  | виводь про це в повідемленні за допомогою метода "alert" - "email or password is empty"
  | 3 - При відправки форми в консоль виведи обьект з данними користувача. Реалізуй перевірку, якщо користувач не ввів імʼя, записуй в обьект рядок "Anonimus"
  |
  | Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  |  - Повісь слухача події на форму
  |  - Пропиши колбєк функцію onSubmit. Не забувай про відміну поведінки по змовчуванню. Значення інпутів знайди за допомогою currentTarget і його elements.
  |  - Після отправки почисти форму і реалізуй автоматичне закриття модального вікна
  |============================
*/
