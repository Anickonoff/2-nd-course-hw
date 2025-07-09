//all games
 
function showGameWindow(id) {
    const popupOverlay = document.getElementById(id);
    popupOverlay.style.display = "block";
}
function hideGameWindow(id) {
    const popupOverlay = document.getElementById(id);
    popupOverlay.style.display = "none";
}



// Game1
let secretNumber;
let count;
function game1() {
  secretNumber = Math.floor(Math.random() * 100);
  count = 0;
}

function chkNumber() {
  let userNumber = document.getElementById('game__input1').value;
    let userText = '<p class="sug">Вы ввели ' + userNumber + "</p>";
    addText(userText);
    if (isNaN(Number(userNumber)) || userNumber === "") {
      addText("Переданный параметр не является числом!");
    } else if (userNumber < secretNumber) {
      //alert('Загаданное число больше, попробуйте ещё раз.');
      addText('<p class="ansver">Загаданное число больше, попробуйте ещё раз.</p>');
      count++;
    } else if (userNumber > secretNumber) {
      //  alert('Загаданное число меньше, попробуйте ещё раз.');
      addText('<p class="ansver"> Загаданное число меньше, попробуйте ещё раз.</p>');
      count++;
    } else {
      count++;
      userText = '<p class="ansver">Поздравляю, Вы угадали число ' + userNumber + ' за ' + count + ' ' + endingTryWord(count) + "!!!</p>";
    addText(userText);
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

function addText(text) {
  let div = document.getElementById('game__textfield1');
  div.innerHTML += text;
}

