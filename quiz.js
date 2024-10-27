function checkAnswer(){
    const correctAnswer = '4';

    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    if (!userAnswer){
        document.getElementById('feedback').textContent = 'Please choose an answer befoer you submit';
        console.log('No Answer Submitted');
        return;
    }

    const userSelectedValue = userAnswer.value;
    console.log('user answer:',userSelectedValue);

    if (userSelectedValue === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct! Nice Job' ;
    } else {
        document.getElementById('feedback').textContent = 'Oh no that is wrong' ;
    }

}

document.getElementById('submit-answer').addEventListener('click',checkAnswer);