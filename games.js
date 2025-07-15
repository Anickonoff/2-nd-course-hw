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

function chkNumber() {
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
