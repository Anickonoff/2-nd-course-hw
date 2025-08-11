//Задание 1

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));

//Задание 2

function isPositive(item) {
  return item > 0 ? true : false;
}
function isMale(item) {
  return item.gender === 'male'? true : false;
}
function filter(arr, filterFunction) {
  const newArr = [];
  arr.forEach((el) => {
    if (filterFunction(el)) newArr.push(el);
  })
  return newArr;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

//Задание 3

function currentDate() {
  let timer = setInterval(() => {
    let date = new Date();
    console.log(date);
  }, 3000);
  setTimeout(() => {
    clearInterval(timer);
    console.log('30 секунд прошло');
  }, 30000);
}

//Задание 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Чтобы код заработал, нужно было заменить ' на `. Иначе не подставляет значение переменной name
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond((item) => {return sayHi('Глеб')});

