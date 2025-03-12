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
            const energy = document.querySelector('input[name="energy"]:checked')?.value;
            const grooming = document.querySelector('input[name="grooming"]:checked')?.value;

            if (!walks || !size || !pets || !living || !experience || !energy || !grooming) {
                resultsDiv.innerHTML = '<p>Please answer all questions.</p>';
                return;
            }

            const profileScores = {
                companion: 0,
                family: 0,
                experienced: 0,
            };

            // Scoring system
            if (size === 'small') profileScores.companion += 2;
            else if (size === 'medium') profileScores.family += 1;
            else if (size === 'large') profileScores.experienced += 2;

            if (energy === 'low') profileScores.companion += 2;
            else if (energy === 'medium') profileScores.family += 2;
            else if (energy === 'high') profileScores.experienced += 2;

            if (grooming === 'low') profileScores.companion += 2;
            else if (grooming === 'medium') profileScores.family += 1;
            else if (grooming === 'high') profileScores.experienced += 2;

            if (living === 'apartment') profileScores.companion += 2;
            else if (living === 'house') profileScores.family += 2;
            else if (living === 'rural') profileScores.experienced += 2;

            if (pets === 'yes') profileScores.family += 2;

            if (experience === 'lots') profileScores.experienced += 2;

            // Determine highest score
            let bestProfile = '';
            let highestScore = 0;

            for (const profile in profileScores) {
                if (profileScores[profile] > highestScore) {
                    highestScore = profileScores[profile];
                    bestProfile = profile;
                }
            }

            // Generate results
            let result = '';

            if (bestProfile === 'companion') {
                result = 'You need a low-maintenance companion! Consider a Cavalier King Charles Spaniel or Shih Tzu.';
            } else if (bestProfile === 'family') {
                result = 'You need an active family dog! Consider a Labrador Retriever or Golden Retriever.';
            } else if (bestProfile === 'experienced') {
                result = 'You need a dog for experienced owners! Consider a Border Collie or German Shepherd.';
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
