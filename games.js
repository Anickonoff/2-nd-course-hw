function game1() {
    const secretNumber = Math.floor(Math.random() * 100);
    let count = 0;
    while(true) {
        let userNumber = prompt('Угадайте число');
        if (userNumber === null) {
            break;
        }
        if (isNaN(Number(userNumber)) || userNumber === '') {
            alert('Переданный параметр не является числом!');
            continue;
        }
        if (userNumber < secretNumber) {
            alert('Загаданное число больше, попробуйте ещё раз.');
            count++;
        } else if (userNumber > secretNumber) {
            alert('Загаданное число меньше, попробуйте ещё раз.');
            count++;
        } else {
            count++;
            alert(`Поздравляю, Вы угадали число ${userNumber} за ${count} ${endingTryWord(count)}!!!`);
            break;
        }
    }
}

function endingTryWord(a) {
    if (a > 10 && a < 20) {
        return 'попыток';        
    } else if (a % 10 > 1 && a % 10 < 5) {
        return 'попытки';        
    } else if (a % 10 > 4 && a % 10 <= 9 || a % 10 == 0 ) {
        return 'попыток';
    } else {
        return 'попытку';
    }
}