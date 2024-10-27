function checkAnswer(){
    const correctAnswer = '4';

    const useranswer = document.querySelector('input[name="quiz"]:checked');
    
    if (!useranswer){
        document.getElementById('feedback').textContent = 'Please choose an answer befoer you submit';
        console.log('No Answer Submitted');
        return;
    }

    const userAnswer = useranswer.value;
    console.log('user answer:',userSelectedValue);

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done." ;
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!" ;
    }

}

document.getElementById('submit-answer').addEventListener('click',checkAnswer);