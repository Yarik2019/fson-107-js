// Створіть функцію, яка буде додавати данні в localStorage.
export function addDataToLocalstorage(key, value) {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error("Set state error", error.message);
  }
}
// Створіть функцію, яка буде отримувати данні з localStorage.
export function getDataFromLocalstorage(key) {
  try {
    const lsData = localStorage.getItem(key);
    return lsData === null ? undefined : JSON.parse(lsData);
  } catch (error) {
    console.error("Get state error", error.message);
  }
}
// Створіть функцію, яка буде видаляти всі значення з localStorage по ключу.
function removeDataFromLocalstorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Remove item error", error.message);
  }
}
// Створіть функцію, яка буде видаляти всі значення з localStorage.
function cleareAllDataFromLocalstorage() {
  localStorage.clear();
}
// Створіть функцію, яка буде повертати кількість елементів в localStorage
function countLocalstorageKeys() {
  return localStorage.length;
}

// Створіть функцію, яка буде повертати масив ключів з localStorage
function makeArrayKeysLs() {
  const keysLs = Object.keys(localStorage);
  return keysLs;
}

// addDataToLocalstorage("time", 10);
// addDataToLocalstorage("data", [{ username: "Mango" }, { username: "Qiwi" }]);

// console.log(getDataFromLocalstorage("data"));
// console.log(getDataFromLocalstorage("time"));

// removeDataFromLocalstorage("data");
// cleareAllDataFromLocalstorage();
// console.log(countLocalstorageKeys());
// console.log(makeArrayKeysLs());
