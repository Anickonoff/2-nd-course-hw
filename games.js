//all games
 
function showGameWindow(id) {
    const popupOverlay = document.getElementById(id);
    popupOverlay.style.display = "block";
}
function hideGameWindow(id) {
    const popupOverlay = document.getElementById(id);
    popupOverlay.style.display = "none";
}

function addText(id, text) {
  let div = document.getElementById(id);
  div.innerHTML += text;
  div.scrollTop = div.scrollHeight;
}

function clearText(id) {
  let div = document.getElementById(id);
  div.innerHTML = '';
}


// Game1
let secretNumber;
let count;
function game1() {
  secretNumber = Math.floor(Math.random() * 100);
  count = 0;
}

function chkAnsverGame1() {
  let userNumber = document.getElementById('play__input1').value;
  document.getElementById('play__input1').value = '';
  let userText = '<p class="play__text">Вы ввели ' + userNumber + "</p>";
  addText('play__textfield1', userText);
  if (isNaN(Number(userNumber)) || userNumber === "") {
    addText('play__textfield1', '<p class="play__text">Переданный параметр не является числом!</p>');
  } else if (userNumber < secretNumber) {
    //alert('Загаданное число больше, попробуйте ещё раз.');
    addText('play__textfield1', '<p class="play__text">Загаданное число больше, попробуйте ещё раз.</p>');
    count++;
  } else if (userNumber > secretNumber) {
    //  alert('Загаданное число меньше, попробуйте ещё раз.');
    addText('play__textfield1', '<p class="play__text"> Загаданное число меньше, попробуйте ещё раз.</p>');
    count++;
  } else {
    count++;
    userText = '<p class="play__text">Поздравляю, Вы угадали число ' + userNumber + ' за ' + count + ' ' + endingTryWord(count) + "!!!</p>";
    addText('play__textfield1', userText);
  }
}

function endingTryWord(a) {
  if (a > 10 && a < 20) {
    return "попыток";
  } else if (a % 10 > 1 && a % 10 < 5) {
    return "попытки";
  } else if ((a % 10 > 4 && a % 10 <= 9) || a % 10 == 0) {
    return "попыток";
  } else {
    return "попытку";
  }
}

document.getElementById("play__input1")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("play__enter1").click();
    } else if (event.key === 'Escape') {
        document.getElementById('play__exit1').click();
    }
});


// Game2
let operationID;
let a;
let b;
let taskText;

let game2 = () => {
  operationID = Math.floor(Math.random() * 4);
  switch (operationID) {
    case 0: //сложение
      a = Math.floor(Math.random() * 50);
      b = Math.floor(Math.random() * 50);
      secretNumber = a + b;
      taskText = '<p class="play__text">Сколько будет ' + a + ' + ' + b + '?</p>';
      break;
    case 1: //вычитание
      a = Math.floor(Math.random() * 50);
      b = Math.floor(Math.random() * 50);
      secretNumber = a - b;
      taskText = '<p class="play__text">Сколько будет ' + a + ' - ' + b + '?</p>';
      break;
    case 2: //умножение
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 10);
      secretNumber = a * b;
      taskText = '<p class="play__text">Сколько будет ' + a + ' * ' + b + '?</p>';      
      break;
    case 3: //деление
      a = Math.floor(Math.random() * 100);
      b = Math.floor(Math.random() * 10);
      secretNumber = (Math.round(a / b * 100) / 100).toFixed(2);
      taskText = '<p class="play__text">Сколько будет ' + a + ' / ' + b + ' с точностью до двух знаков после запятой?</p>';      
      break;
  }
  addText('play__textfield2', taskText);
}

function chkAnsverGame2() {
  let userNumber = document.getElementById('play__input2').value;
  document.getElementById('play__input2').value = '';
  let tmpUserNumber = userNumber.split('');
  if (tmpUserNumber.includes(',')) {
    tmpUserNumber[tmpUserNumber.indexOf(',')] = '.';
    userNumber = tmpUserNumber.join('');
  }
  if (isNaN(Number(userNumber)) || userNumber === "") {
    addText('play__textfield2', '<p class="play__text">Вы ввели не число!</p>');
  } else if (Number(userNumber) == secretNumber) {
    //alert('Загаданное число больше, попробуйте ещё раз.');
    let userText = '<p class="play__text">Вы ввели ' + userNumber + ". И это правильный ответ!</p>";
    addText('play__textfield2', userText);
    game2();
  } else {
    let userText = '<p class="play__text">Вы ввели ' + userNumber + ". И это не правильный ответ.</p>";
    addText('play__textfield2', userText);game2();
  }  
}

document.getElementById("play__input2")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("play__enter2").click();
    } else if (event.key === 'Escape') {
        document.getElementById('play__exit2').click();
    }
});