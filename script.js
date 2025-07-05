for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

for (let i = 1; i < 6; i++) {
    console.log(i);
}


for (let i = 7; i <= 22; i++) {
    console.log(i);
}


let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (const key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);       
}


let n = 1000;
let count = 0;
while (n > 50) {
    n /= 2;
    count++;
}
console.log(`После деления ${count} раз получилось число ${n}`);


let firstFriday = 7;
for (let i = 1; i <= 31; i++){
    if ((i - firstFriday) % 7 === 0) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    }
}


let k = 100;
let iteration = 0;
while (k > 0) {
    k -= 7;
    iteration++;
}
console.log(`После вычитания ${iteration} раз получилось число ${k}`);


let mounth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
for (let i = 0; i < 12; i++) {
  console.log(`${mounth[i]} - ${i + 1}-ый месяц в году`);
}


let book = {
    title: "Возвышение физрука",
    author: "Мусаниф Сергей",
    year: 2020,
    genre: "ЛитРПГ"
}
for (const key in book) {
    console.log(`${key}: ${book[key]}`);                                
}


let numbers = [];
for (i = 0; i < 10; i++) {
  numbers[i] = Math.floor(Math.random() * 100);
}
let min = numbers[0];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(`В массиве ${numbers} минимальное число ${min}`);