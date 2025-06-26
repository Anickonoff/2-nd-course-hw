let a = 10;
alert(a);
a = 20;
alert(a);

let firstIphoneYear = 2007;
alert(`Первый IPhome вышел в ${firstIphoneYear} году`);

let creatorJavaScript = "Брендан Эйх";
alert(`Создателем JavaScript является ${creatorJavaScript}`);

a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

let result = 2 ** 5;
alert(`2 в 5 степени равно ${result}`);

a = 9;
b = 2;
alert(`остаток от деления ${a} на ${b} равен ${a % b}`);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько Вам лет?');
alert(`Вам ${age} лет`);

let user = { name: "Ilon", age: 53, isAdmin: true};
console.log(typeof user.name);
console.log(typeof user.age);
console.log(typeof user.isAdmin);


let name = prompt('Как Вас зовут?');
alert(`Привет, ${name}!`);

let number = Number(prompt('Введите любое число'));
let newNumber = number * 2;
alert(newNumber);
let newNumber2 = newNumber + 10;
alert(newNumber2);
let newNumber3 = newNumber2 / 2;
alert(newNumber3);
let newNumber4 = newNumber3 - number;
alert(newNumber4);
alert('Ответ всегда равен 5');
