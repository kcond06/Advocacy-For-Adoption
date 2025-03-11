// puppy-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('puppy-quiz');
    const resultsDiv = document.getElementById('quiz-results');

    if (quizForm && resultsDiv) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const walks = document.querySelector('input[name="walks"]:checked')?.value;
            const size = document.querySelector('input[name="size"]:checked')?.value;
            const pets = document.querySelector('input[name="pets"]:checked')?.value;
            const living = document.querySelector('input[name="living"]:checked')?.value;
            const experience = document.querySelector('input[name="experience"]:checked')?.value;

            if (!walks || !size || !pets || !living || !experience) {
                resultsDiv.innerHTML = '<p>Please answer all questions.</p>';
                return;
            }

            let score = 0;

            if (walks === 'long') score += 2;
            if (walks === 'medium') score += 1;
            if (size === 'large') score += 2;
            if (size === 'medium') score += 1;
            if (pets === 'yes') score += 1;
            if (living === 'house') score += 2;
            if (experience === 'lots') score += 2;
            if (experience === 'some') score += 1;

            let result = '';

            if (score >= 8) {
                result = 'You need a very active and large dog, someone who loves the outdoors. A golden retriever or a german shepard would be a great fit for you.';
            } else if (score >= 5) {
                result = 'You need a medium-sized, somewhat active dog. A beagle or a terrier would be a great fit for you.';
            } else {
                result = 'You need a small, calm dog. A chihuahua or a pug would be a great fit for you.';
            }

            resultsDiv.innerHTML = `
                <h2>Your Perfect Puppy Match!</h2>
                <p>${result}</p>
                <button onclick="window.location.href='adopt.html'">Back to Adoption Page</button>
            `;
        });
    } else {
        console.error("Quiz form or results div not found.");
    }
});
