var words = ["programm", "monkey", "beautiful", "pancake"];
var randWord = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < randWord.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = randWord.length;
var attemptCount = 9;

while (remainingLetters > 0 && attemptCount > 0) {
    alert(answerArray.join(" "));
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.");
    } else if (answerArray.indexOf(guess.toLowerCase()) > 0) {
        alert("Вы уже вводили эту букву.")
    }else {
        guess = guess.toLowerCase();
        for (var j = 0; j < randWord.length; j++) {
            if (randWord[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
        if (randWord.indexOf(guess) < 0) {
            attemptCount--;
        }
    }
}

alert(answerArray.join(" "));
if (attemptCount > 0) {
    alert("Отлично! Было загадано слово " + randWord);
} else {
    alert("Вы проиграли. Было загадано слово " + randWord);
}
