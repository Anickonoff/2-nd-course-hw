//Задание 1

let str1 = 'js';
let newStr1 = str1.toUpperCase();
console.log(newStr1);

//Задание 2

function strFilter(strs, str) {
  const filteredStrs = [];
  strs.forEach((el) => {
    if (el.toLowerCase().startsWith(str.toLowerCase())) {
      filteredStrs.push(el);
    }
  });
  return filteredStrs;
}

//Задание 3

let number3 = 32.58884;
console.log(`Число ${number3} округленное до меньшего целого равно ${Math.floor(number3)}`);
console.log(`Число ${number3} округленное до большего целого равно ${Math.ceil(number3)}`);
console.log(`Число ${number3} округленное до ближайшего целого равно ${Math.round(number3)}`);

//Задание 4

const numbers4 = [52, 53, 49, 77, 21, 32];
console.log(`Минимальное число массива [${numbers4}] равно ${Math.min(...numbers4)}`);
console.log(`Максимальное число массива [${numbers4}] равно ${Math.max(...numbers4)}`);

//Задание 5

const random10 = () => Math.ceil(Math.random() * 10);
//Либо с использованием math.floor согласно требованиям:
const newRandom10 = () => Math.floor(Math.random() * 10) + 1;

//Задание 6

function randomArr(length) {
  let arr = [];
  //Длина массива равна половине числа с округлением в большую сторону
  for (let i = 0; i < length / 2; i++) {
    arr.push(Math.floor(Math.random() * length));
  }  
  return arr;
}

//Задание 7 

const randomMinMax = (min, max) => Math.floor(Math.random() * (max - min) + min);

//Задание 8

console.log(Date());

//Задание 9

let currentDate = new Date();
console.log(currentDate);
//Через изменение UNIX времени
let days73 = 73 * 24 * 3600 * 1000;
console.log(new Date(+currentDate + days73));
//Через суммирование дней, более громозко, но тоже работает
let futureDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate() + 73, currentDate.getHours(), currentDate.getMinutes(),currentDate.getSeconds(),currentDate.getMilliseconds());
console.log(futureDate);
//Или проще через setDate (в уроке и конспекте не упоминается)
let futureDate2 = currentDate;
futureDate2.setDate(futureDate2.getDate() + 73);
console.log(futureDate2);

//Задание 10

function displayDate(date) {
  const nameMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const nameDay = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  let dateText = 'Дата: ' + date.getDate() + ' ' + nameMonth[date.getMonth()] + ' ' + date.getFullYear() + '— это ' + nameDay[date.getDay()];
  let timeText = 'Время: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  return dateText + '\n' + timeText;
}

