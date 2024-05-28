function submitQuiz() {
    var totalQuestions = 2;
    var correctAnswers = 0;

    var q1 = document.querySelector('input[name="question1"]:checked');
    var q2 = document.querySelector('input[name="question2"]:checked');

    if (q1 && q1.value === 'a') {
        correctAnswers++;
    }

    if (q2 && q2.value === 'a') {
        correctAnswers++;
    }

    var result = document.getElementById('result');
    result.textContent = 'Bạn đã trả lời đúng ' + correctAnswers + ' trên ' + totalQuestions + ' câu hỏi.';
}
