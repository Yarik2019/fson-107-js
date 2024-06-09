// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const values = ['hello', 2, -10, true, null, undefined]

// const styles = ['jazz', 'bluz']
// styles.push("Рок-н-рол")
// console.log(styles)
// console.log(styles.shift())
// const index = styles.indexOf("bluz");
// if (index !== -1) {
//     styles[index] = "Класика";
// }
// console.log(index)
// // styles[1] = "Класика";
// console.log(styles)

// // styles.unshift('Реп', 'Реггі')
// // console.log(styles);
// const newStyles = ["Реп", "Реггі"];
// const concatStyles = newStyles.concat(styles)
// console.log(concatStyles.includes("Класика"));

//TODO:=========task-1=================
//Перетворити рядок, що містить слова, розділені комами,
// в масив слів і вивести кожне слово в окремому рядку за допомогою циклу for і for..of.

// const str = 'JavaScript, HTML, CSS, React';
// const strArray = str.split(',');
// console.log(strArray);

// // for (let i = 0; i < strArray.length; i += 1){
// //     console.log(strArray[i])
// // }
// for (const letter of strArray) {
//   console.log(letter);
// }

// //TODO:=========task-2=================
// // Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, роділений дефісами у нижньому регістрі.

// const message = 'JavaScript is a popular programming language.';
// const newMassage = message.split(' ');
// console.log(newMassage.length);
// const slegMessage = newMassage.join('-').toLocaleLowerCase();
// console.log(slegMessage);

// //TODO:=========task-3=================
// // Об'єднати масив слів в рядок, розділений комами та пробілами.

// const words = ['JavaScript', 'HTML', 'CSS', 'React'];
// console.log(words.join(', '));

//TODO:=========task-4=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 'S';

// const newArr = [];

// for (const word of wordsArray) {
//   //   console.log(word);
//   if (word.includes(substring)) {
//     newArr.push(word);
//   }
//   if (word.indexOf(substring) !== -1) {
//     newArr.push(word);
//   }
// }
// console.log(
//   `Масив елементів, що містять підстроку '${substring}': ${newArr.join(', ')}`
// );
// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet",
//  який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'
const human = {
  userName: "Mango",
  hobby: "Football",
  age: 21,
  greet() {
    // console.log(`Hello ${this.userName}`);
  },
};
// console.log(human.userName);
// console.log(human.greet());
// console.log(human["hobby"]);
// human.mood = "happy";
// console.log(human);
// human.hobby = "skydiving";
// console.log(human);
//TODO:============task-2======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

const obj = {
  name: "Igor",
  car: "Mercedes",
  carColor: "black",
};
// function getBool(key, object) {
//   const keys = Object.keys(object);
//   return keys.includes(key);
// }
// console.log(getBool("ghj", obj));
function getBool(key, object) {
  return key in object;
}
// console.log(getBool("car", obj));
//
//TODO:============task-3======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
function totalSalary(obj) {
  let sum = 0;
  const valuesArray = Object.values(obj);
  for (const number of valuesArray) {
    sum += number;
  }
  return sum;
}
// console.log(totalSalary(salaries));
// console.log(totalSalary({}));
// console.log(Object.entries(salaries));
//TODO:============task-5======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

// console.log(multiplyNumeric(menu));
//TODO:============task-6==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct",
// який буде перевіряти, чи є певний товар в наявності на складі магазину.
const store = {
  products: [],
  hasProduct(productName) {
    return this.products.includes(productName);
  },
  // addProduct(productName) {
  //   this.products.push(productName);
  //   console.log(this.products);
  // },
  addProduct(array) {
    this.products.push(...array);
    console.log(this.products);
  },
};
store.addProduct(["tomato", "banana", "apple"]);

// store.addProduct("orange");
// console.log(store.hasProduct("kiwi"));
// console.log(store.hasProduct("tomato"));
