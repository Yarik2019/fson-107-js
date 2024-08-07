//! module 9
import { refs } from "./refs.js";
import {
  addDataToLocalstorage,
  getDataFromLocalstorage,
} from "./localStorage-api.js";
import { LS_KEY } from "./keys.js";
import { createDate, getAge } from "./helpersFunctions.js";
//TODO:====================01==========================
// Зроби переключатель світлої і темної теми
refs.checkbox.addEventListener("click", onCheckboxClick);
document.addEventListener("DOMContentLoaded", renderPage);

function onCheckboxClick(event) {
  if (event.currentTarget.checked) {
    refs.body.classList.replace("light", "dark");
    addDataToLocalstorage(LS_KEY, "dark");
  } else {
    refs.body.classList.replace("dark", "light");
    addDataToLocalstorage(LS_KEY, "light");
  }
}

function renderPage() {
  if (getDataFromLocalstorage(LS_KEY) === "dark") {
    refs.body.classList.replace("light", "dark");
    refs.checkbox.checked = true;
  } else {
    refs.body.classList.replace("dark", "light");
  }
}

//!module 10
//TODO:====================01==========================
// Потрібно створити калькулятор віку. Є контейнер з заголовком "калькулятором віку" і input з введенням дати. Якщо ми натиснемо на input дати, ми зможемо вибрати дату нашого дня народження. Наприклад, якщо ми виберемо дату 17.06.1998 року і натиснемо на "Розрахувати вік", побачимо, що вік розраховується на основі цієї дати і нам у результаті покажеться, що Your age is 25 years old; Якщо нічого не введено, то виводь alert("Please enter your birthday")Використовуй доповіжні функції для роботи.

refs.ageBtn.addEventListener("click", onClick);

function onClick(event) {
  const clientData = new Date(refs.inputDate.value);
  const currentDate = new Date();
  const diff = currentDate - clientData;
  const result = getAge(diff);
  refs.outputAge.textContent = `Your age is ${result} years old`;
}

//TODO:====================02==========================
// Напиши скрипт для віджета календаря. В кінцевому результаті повинна відображатися сьогоднішня дата у календарику. Використовуй new Date() для отримання поточного року, місяця, дня тижня та самого дня. Задай відповідні дані у відповідні елементи на html сторінці.

document.addEventListener("DOMContentLoaded", renderCalendar);

function renderCalendar(event) {
  const { currentMonth, currentDay, currentWeekday, currentYear } =
    createDate();
  refs.calendarContainer.querySelector(".js-month").textContent = currentMonth;
  refs.calendarContainer.querySelector(".js-day-number").textContent =
    currentDay;
  refs.calendarContainer.querySelector(".js-day").textContent = currentWeekday;
  refs.calendarContainer.querySelector(".js-year").textContent = currentYear;
}

//* promise
//TODO:====================01==========================
// setTimeout(() => {
//   console.log(1);
// }, 2000);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(4);
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return "hello world";
// }
// function greet() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello world");
//     }, 2000);
//   });
// }
// greet()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => console.log(error));
// console.log(greet());
//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      //   console.log(data);
      res(data);
    }, 1000);
  });
const newArray = [];

// getData()
//   .then((res) => {
//     newArray.push(res);
//     return getNewData();
//   })
//   .then((res) => {
//     newArray.push(res);
//     return getAnotherData();
//   })
//   .then((res) => {
//     newArray.push(res);
//     return getLastData();
//   })
//   .then((res) => {
//     newArray.push(res);
//     console.log(newArray);
//   });
// Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]).then(
//   (res) => {
//     console.log(res);
//   }
// );
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */
