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

const str = 'JavaScript, HTML, CSS, React';
const strArray = str.split(',')
console.log(strArray)

// for (let i = 0; i < strArray.length; i += 1){
//     console.log(strArray[i])
// }
for (const letter of strArray) {
    console.log(letter)
}
