//Задание 1

const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] == 10) {
    break;
  }
}

//Задание 2

console.log(`Индекс числа 4 в массиве равен ${numbers.indexOf(4)}`);

//Задание 3

const numbs = [1, 3, 5, 10, 20];
console.log(numbs.join(" "));

//Задание 4

const array = [];
for (let i = 0; i < 3; i++) {
  array[i] = [];
  for (let j = 0; j < 3; j++) {
    array[i][j] = 1;
  }
}
console.log(array);

//Задание 5

const array5 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
  array5.push(2);
}
console.log(array5);

//Задание 6

const array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
newarray6 = array6.filter(i => i !='a');
console.log(newarray6);
//или просто удалить последний элемент командой
array6.pop();
console.log(array6);


//Задание 7 

const array7 = [9, 8, 7, 6, 5];
let userNumber = prompt("Угадайте число из массива");
if (array7.includes(Number(userNumber) )) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

//Задание 8

let srt8 = 'abcdef';
let array8 = srt8.split('');
array8.reverse();
console.log(array8.join(''));
//Сокращённый вариант записи без создания новых переменных
console.log(srt8.split('').reverse().join(''));

//Задание 9

let array9 = [[1, 2, 3],[4, 5, 6]]
console.log(array9[0].concat(array9[1]));
//Либо с использованием spread:
console.log([...array9[0], ...array9[1]]);

//Задание 10

const array10 = [1, 3, 2, 5, 4];

for (let i = 0; i < array10.length-1; i++) {
  console.log(array10[i]+array10[i+1]);
}

//Задание 11

let sqr = (array) => {
  return array.map(ar => ar * ar);
}
console.log('Массив ' + array10 + ' результат выполнения функции ' + sqr(array10));

//Задание 12

const array12 = [
  'Я помню чудное мгновенье:',
  'Передо мной явилась ты,',
  'Как мимолетное виденье,',
  'Как гений чистой красоты.'
];
let arrStrLength = (arr) => {
  return arr.map(ar => ar.length);
}
console.log(array12);
console.log(arrStrLength(array12));

//Задание 13

const array13 = [4, -3, 6, -2, -22, 4, 54, -45];
let arrNegative = (arr) => {
  return arr.filter(ar => ar < 0);
}
console.log(array13);
console.log(arrNegative(array13));


//Задание 14

const array14 = new Array(10);
for (let i = 0; i < array14.length; i++) {
  array14[i] = Math.floor(Math.random() * 10);
}
const newArray14 = array14.filter(el => el % 2 == 0);

console.log(array14);
console.log(newArray14);

//Задание 15

const array15 = new Array(6);
for (let i = 0; i < array15.length; i++) {
  array15[i] = Math.floor(Math.random() * 10);
}
console.log(array15);
console.log(array15.reduce((result, el) => result + el / array15.length, 0));