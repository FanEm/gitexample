/**
 * Created by fanem on 30.11.16.
 */
function playGuess() {
    var answer = parseInt(Math.random() * 100);
    while (true) {
        var userAnswer = prompt('Enter the number from 1 to 100, for exit press q');
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert('Too much');
        } else if (userAnswer < answer) {
            alert('Too low');
        } else if (userAnswer == answer) {
            alert('You are right');
            break;
        } else {
            alert('You must enter the number');
        }

    }
}