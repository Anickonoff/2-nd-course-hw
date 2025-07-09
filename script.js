//Задание 1

const min = (a, b) => {
  let minValue = a >= b ? b : a;
  return minValue;
}

//Задание 2

function isEven(n) {
  if (n % 2 == 0) {
    return 'Число четное'
  } else {
    return 'Число нечетное'
  }
}

//Задание 3

function sqrInConsole(x) {
  console.log(x * x);
}

function sqr(x) {
  return x * x;
}


//Задание 4

function greetUser() {
  let userAge = prompt("Сколько Вам лет?");
  if (userAge < 0) {
    alert("Вы ввели неправильное значение");
  } else if (userAge <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
}

//Задание 5

const mult = (a, b) => {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return 'Одно или оба значения не являются числом';
  } else {
  return a * b;
  }
}

//Задание 6

const squareNumber = () => {
  let number = prompt("Введите число")
  if (isNaN(Number(number))) {
    return 'Переданный параметр не является числом';
  } else {
  return `${number} в кубе равняется ${number ** 2}`;
  }
}

//Задание 7 

function getCurcleArea() {
    return Math.PI * this.radius ** 2;
}

function getCurclePerimeter() {
    return 2 * Math.PI * this.radius;
}

const curcle1 = {
    radius: 10,
    getArea: getCurcleArea,
    getPerimeter: getCurclePerimeter,
}

const curcle2 = {
    radius: 1,
    getArea: getCurcleArea,
    getPerimeter: getCurclePerimeter,
}
