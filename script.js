function calculateResults() {
    // Get the form and all the questions
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    
    let score = 0;
    
    // Loop through each question and get the selected answer
    const questions = form.querySelectorAll('.question');
    questions.forEach((question) => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        
        if (selectedOption) {
            score += parseInt(selectedOption.value);
        }
    });
    
    // Show result based on score
    let resultMessage = '';
    
    if (score <= 4) {
        resultMessage = 'You should consider a calm, low-energy breed like a Bulldog!';
    } else if (score <= 6) {
        resultMessage = 'A moderate-energy dog like a Beagle could be a good match for you!';
    } else {
        resultMessage = 'You might be a great fit for an active dog like a Labrador or Border Collie!';
    }
    
    resultDiv.innerHTML = `<h2>Your Results:</h2><p>${resultMessage}</p>`;
}

