//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const string = "abcde";

// if (string.startsWith("a")) {
//   console.log("Yes");
// } else {
//   console.log("not letter");
// }

// string.startsWith("a") ? console.log("Yes") : console.log("No");

// TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// const firstName = "Vik";
// const lastName = "Stashko";

// if (firstName.length > 4 && lastName.length > 5) {
//   const fullLength = firstName.length + lastName.length;
//   console.log(fullLength);
// } else {
//   console.log("неможливо виконати умову");
// }

// TODO: 3 ===================================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// function checkNumber() {
//     const number = prompt("Enter number: ");
//     if (number >= 55 && number <= 99) {
//         return "Число потрапляє в діапазон";
//     } else { return "Число не потрапляє в діапазон" };
// }

// console.log(checkNumber());
// TODO: 4 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = 120;

// function checkAge(age) {
//     if (age >= 0 && age <= 16) {
//         return "kids";
//     } else if (age >= 17 && age <= 60) {
//         return "adults";
//     } else if (age >= 61 && age <= 100) {
//         return "pensions";
//     } else {
//         return "Error ";
//     }
// }

// console.log(checkAge(ageMaxim));

//TODO: 5 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.
// const drink = prompt('chose your drink').toLocaleLowerCase()


// function orderDrink(drinkName) {
//     let price = 0
//   switch (drinkName) {
//       case "кава":
//           price = 40;
//           break
//     case "чай":
//           price = 20
//           break
//     case "сік":
//           price = 30
//           break
//     default:
//       return "error";
//     }
//     return `order ${price}UAH`;
// }


// function orderDrink(drinkName) {
//     switch (drinkName) {
//       case "кава":
//         return "order sum 40UAH";
//       case "чай":
//         return "order sum 20UAH";
//       case "сік":
//             return "order sum 30UAH";
//         default:
//             return 'error'
//     }
// }

// console.log(orderDrink(drink));

// TODO: 6 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let index = 0
// while (index <= 100) {
//     console.log(index)
//     index += 1
// }

// for (let i = 0; i <= 100; i++){
//     console.log(i);
// }

// let number = Number.parseInt(prompt('Ведіть число більше 100'))
// while (number < 100) {
//     number = Number.parseInt(prompt("Ведіть число більше 100"));
// }