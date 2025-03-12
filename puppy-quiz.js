// puppy-quiz.js

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('puppy-quiz');
    const resultsDiv = document.getElementById('quiz-results');

    if (quizForm && resultsDiv) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Gather all the answers from the form.
            const walks = document.querySelector('input[name="walks"]:checked')?.value;
            const size = document.querySelector('input[name="size"]:checked')?.value;
            const pets = document.querySelector('input[name="pets"]:checked')?.value;
            const living = document.querySelector('input[name="living"]:checked')?.value;
            const experience = document.querySelector('input[name="experience"]:checked')?.value;
            const energy = document.querySelector('input[name="energy"]:checked')?.value;
            const grooming = document.querySelector('input[name="grooming"]:checked')?.value;

            if (!walks || !size || !pets || !living || !experience || !energy || !grooming) {
                resultsDiv.innerHTML = '<p>Please answer all questions.</p>';
                return;
            }

            let score = 0;

            // Example score weighting
            if (walks === 'short') score += 1;
            else if (walks === 'medium') score += 2;
            else if (walks === 'long') score += 3;

            if (size === 'small') score += 1;
            else if (size === 'medium') score += 2;
            else if (size === 'large') score += 3;

            if (pets === 'yes') score += 1;
            if (living === 'house') score += 2;

            if (experience === 'lots') score += 2;
            else if (experience === 'some') score += 1;

            if (energy === 'high') score += 3;
            else if (energy === 'medium') score += 2;
            else if (energy === 'low') score += 1;

            if (grooming === 'high') score += 3;
            else if (grooming === 'medium') score += 2;
            else if (grooming === 'low') score += 1;

            let result = '';

            // More complex result logic
            if (score >= 12) {
                result = 'You need a high-energy, large dog such as a Border Collie or Australian Shepherd.';
            } else if (score >= 8) {
                result = 'You need a medium-sized, active dog such as a Beagle or Cocker Spaniel.';
            } else {
                result = 'You need a small, low-maintenance dog such as a Cavalier King Charles Spaniel or Shih Tzu.';
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
