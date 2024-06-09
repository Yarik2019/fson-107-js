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

const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
const substring = 'S';

const newArr = [];

for (const word of wordsArray) {
  //   console.log(word);
  //   if (word.includes(substring)) {
  //     newArr.push(word);
  //   }
  if (word.indexOf(substring) !== -1) {
    newArr.push(word);
  }
}
console.log(
  `Масив елементів, що містять підстроку '${substring}': ${newArr.join(', ')}`
);
