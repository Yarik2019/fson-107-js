//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.
// function performOperation(a, b, callback) {
//   return callback(a * b);
// }
// function callbackFunction(number) {
//   if (number % 2 === 0) {
//     return number * number;
//   } else {
//     return Math.sqrt(number);
//   }
// }
// const result = performOperation(31, 41, callbackFunction);

// console.log(result);

//TODO:============task-02=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 2, 5, 7, 9, 20];
// const words = ["apple", "banana", "orange", "pear"];

// function findElement(arr, callback) {
//   let result = null;
//   arr.forEach((element) => {
//     // console.log(element);
//     if (callback(element) && result === null) {
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

// const res = findElement(numbers, isEven);
// const res2 = findElement(words, startWithO);
// console.log(res);
// console.log(res2);

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].
// const getNewArray = (arr) => arr.map(number => number * number);

// const getNewArray = arr =>
//   arr.map(number => number * number).every(element => element % 2 === 0);

// const res = getNewArray([1, 2, 3, 4, 5]);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const flatArray = (arr) => arr.flatMap( element => element.values)
// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const checkAge = (arr) => arr.some( element => element.age < 20)

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkEvenArray = (arr) => arr.every( number => number % 2 === 0 )

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 2, 3, 4, 5];

// const getNumber = (arr, value) => arr.find( number => number > value)

// const res = getNumber(numbers, 3);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 200, 5, 1, 3];

// //const sortedArray = (arr) => arr.toSorted( (a, b) => a - b )
// // const sortedArray = (arr) => arr.sort((a, b) => a - b); //брудний метод, мутує вхідні дані
// const sortedArray = (arr) => [...arr].sort((a, b) => a - b);//вже не  мутує вхідні дані

// const res = sortedArray(numbersArray);
// console.log(res);
// console.log(numbersArray);
//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedArray = (arr) => arr.toSorted((a, b) => a.localeCompare(b));

// const res = sortedArray(stringArray);
// console.log(res);

//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const ageSortedUsers = (arr) => [...arr].toSorted((a, b) => a.age - b.age);

// const res = ageSortedUsers(users);
// console.log(res);

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// // const getAge = (arr, age) => arr.filter(element => element.age > age);

// const getAge = (arr, age) =>
//   arr
//     .filter(element => element.age > age)
//     .map(element => element.name)
//     .toSorted((a, b) => a.localeCompare(b));

// const res = getAge(user, 20);
// console.log(res);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum = arr => arr.reduce((acc, element) => (acc += element), 0);

// const res = sum(numbers);
// console.log(res);

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5];

// const averageValue = arr =>
//   arr.reduce((acc, element) => (acc += element / arr.length), 0);

// const res = averageValue(arr);
// console.log(res);

// ! this
//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.

const user = { 
    userName: "Mango",
    lastName: "Fruit",
    age: 25,
    email: "mango@gmail.com",
    getInfo() { 
        console.log(`Info about user: ${this.userName}`);
    },

    modify(key, value) { 
        if (key !== "userName" && key !== "lastName") {
            return `${key} can not be modified`;
        } else if (value[0] === value[0].toUpperCase() && value.length >= 3){
            this[key] = value;
         }
        return this;
    }
}

// const user2 = Object.create(user);
// user2.userName = "Kiwi";
// user2.getInfo();

// // console.log(this);
// user.getInfo();



//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)
// user.modify('firstName', 'Vlad');

// console.log(user.modify('userName', 'vlad'));
//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:

// function addProperty(key, value) { 
//     this[key] = value;
// }
// user.addProperty = addProperty;
// user.addProperty('friends', [
//   {
//     firstName: 'Mary',
//     lastName: 'Smith',
//     age: 32,
//     email: 'marysmith@hotmail.com',
//   },
//   {
//     firstName: 'Alex',
//     lastName: 'Johnson',
//     age: 45,
//     email: 'alex.johnson@yahoo.com',
//   },
//   {
//     firstName: 'Emily',
//     lastName: 'Davis',
//     age: 19,
//     email: 'emilydavis@gmail.com',
//   },
// ]);

// console.log(user);

//TODO:=========task-04=================
//  Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const obj = {
//   userName: 'Bob',
//   lastName: 'Lasso',
//   age: 50,
//   email: 'BodLasso@gmail.com',
// };

// user.getInfo.call(obj);

//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user
// function showFullName(message, number) {
//     console.log(`${message}, ${this.userName}, ${this.lastName}, ${number}`);
// }
// showFullName.call(user, "Hello", 10);
// showFullName.apply(obj, ["Hello", 20]);
//TODO:=========task-06=================
// Виправте помилки, щоб код працював

// const product = {
//   price: 5000,

//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(callback) {
//   callback();
// }

// callAction(product.showPrice.bind(product));

//! class
//TODO:=================task-01=============================
// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)

// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення.
// - `markAsPaid`() - позначає замовлення як оплачене
// - `addItem`() - який додає предмет замовлення до масиву "items"
// - `removeItem`() - який видаляє предмет замовленя з масиву "items"
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення
// class Order{
//   #tableNumber;
//   #items;
//   #isPaid;
//   constructor(tableNumber) {
//     this.#tableNumber = tableNumber;
//     this.#items = [];
//     this.#isPaid = false;
//   }
//   calculateTotal() {
//     return this.#items.reduce((total, item) => total += item.price, 0)
//   }
//   markAsPaid() {
//     this.#isPaid = true;
//   }
//   addItem(item) {
//     this.#items.push(item);
//   }
//   removeItem(itemName) {
//     const index = this.#items.indexOf(itemName);
//     if (index !== -1) {
//       this.#items.splice(index, 1)
//     }
//   }
//   get tableNumber() {
//     return this.#tableNumber;
//   }
//   get isPaid() {
//     return this.#isPaid;
//   }
// }
// // #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.
// class MenuItem{
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

// }
// // Create menu items
// const item1 = new MenuItem('Burger', 10);
// const item2 = new MenuItem('Fries', 5);
// const item3 = new MenuItem('Drink', 2);

// // Create an order
// const order = new Order(1);

// // Add items to the order
// order.addItem(item1);
// // order.addItem(item2);
// order.addItem(item3);

// // Calculate the total and mark the order as paid
// const total = order.calculateTotal();
// order.markAsPaid();

// console.log(`Order for table ${order.tableNumber} - Total: $${total}`);
// console.log(`Is paid: ${order.isPaid}`);
