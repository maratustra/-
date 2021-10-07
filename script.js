'use strict';

function getNumber(num) {

  let userNumber = +prompt("Угадай число от 1 до 100");

  if (userNumber === null) {
    alert("Игра окончена");
    return;
  }

  function guessNumber() {

    if (userNumber === num) {
      alert("Поздравляю, Вы угадали!");
      return;
    } else if (userNumber > num) {
      userNumber = +prompt("Загаданное число меньше. Введите новый вариант");
    } else if (userNumber < num) {
      userNumber = +prompt("Загаданное число больше. Введите новый вариант");
    } else if (isNaN(userNumber) || !isFinite(userNumber)) {
      userNumber = +prompt("Вы указали не число. Введите новый вариант");
    }
    return guessNumber(userNumber);
  }

  guessNumber(userNumber);
}

getNumber(5);