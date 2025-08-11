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


//Game3
const game3 = () => {
  let userText = document.getElementById('play__input3').value;
  document.getElementById('play__input3').value = '';
  let addedText = '<p class="play__text">Вы ввели ' + userText + "</p>";
  addText('play__textfield3', addedText);
  let reversedUserText = '<p class="play__text">' + userText.split('').reverse().join('') + "</p>";
  addText('play__textfield3', reversedUserText);
}

document.getElementById("play__input3")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("play__enter3").click();
    } else if (event.key === 'Escape') {
        document.getElementById('play__exit3').click();
    }
});


//Game4

let questionNumber = 0;
let ansverNumber = 0;
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function endingQuestionWord(a) {
  if (a > 10 && a < 20) {
    return "вопросов";
  } else if (a % 10 > 1 && a % 10 < 5) {
    return "вопроса";
  } else if ((a % 10 > 4 && a % 10 <= 9) || a % 10 == 0) {
    return "вопросов";
  } else {
    return "вопрос";
  }
}

function game4() {
  questionNumber = 0;
  ansverNumber = 0;
  fillQuizField(questionNumber);
}

function fillQuizField(numberQuestion) {
  clearText("play__textfield4");
  let textQuestion = "<p class='quiz__question'>" + quiz[numberQuestion].question + "</p>";
  addText("play__textfield4", textQuestion);
  let textAnsver = "<div class='quiz__ansvers'>\n";
  quiz[numberQuestion].options.forEach((el, index) => {
    textAnsver +=
      "<div class='quiz__ansver' onclick='chkAnsver4(this)'>" + el + "</div>\n";
  });
  textAnsver += "</div>\n";
  addText("play__textfield4", textAnsver);
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function chkAnsver4(el) {
  el.style.backgroundColor = "#88ba87";
  if (quiz[questionNumber].options.indexOf(el.textContent) + 1 === quiz[questionNumber].correctAnswer) {
    ansverNumber++;
  }
  questionNumber++;
  await sleep(2000);
  if (questionNumber < quiz.length) {
    fillQuizField(questionNumber);
  } else {
    //результат
    clearText("play__textfield4");
    let text = "<p class='quiz__question'>Вопросы закончились. Вы ответили верно на " + ansverNumber + ' ' + endingQuestionWord(ansverNumber) + ' из ' + questionNumber + ".</p>";
    addText("play__textfield4", text);
  }
}


