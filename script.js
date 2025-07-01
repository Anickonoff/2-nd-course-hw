let password = 'gfhjkm';
let userPassword = prompt('Введите пароль');
password === userPassword ? alert('Пароль введен верно') : alert('Пароль введен неправильно');


let c = 3;
c > 0 && c < 10 ? console.log('Верно') : console.log('Не верно');


let d = 45;
let e = 33;
d > 100 || e > 100 ? console.log('Верно') : console.log('Не верно');


let a = '2';
let b = '3';
alert(Number(a) + Number(b));


let monthNumber = 11;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');        
        break;
    case 5:
    case 3:
    case 4:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Нет такого номера месяца');
        break;
}


let userNubmer = prompt('Пожалуйста, введите любое число');
if (Number(userNubmer) != userNubmer) {
    alert('Вы ввели не число');
} 
if (userNubmer % 2 == 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}


let clientOS = 1;
if (clientOS == 1) {
    console.log("Установите версию приложения для Android по ссылке");
} else if (clientOS == 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Неподдерживаемая платформа, пользуйтесь Web-версией');
}


let clientOS = 2;
let clientDeviceYear = 2013;
if (clientOS == 1) {
    if (clientDeviceYear < 2015) {
        console.log("Установите облегченную версию приложения для Android по ссылке");
    } else {
        console.log("Установите версию приложения для Android по ссылке");
    }
} else if (clientOS == 0) {
    if (clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для iOS по ссылке');
    }
} else {
    console.log('Неподдерживаемая платформа, пользуйтесь Web-версией');
}
