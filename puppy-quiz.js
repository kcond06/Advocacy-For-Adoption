// puppy-quiz.js

document.getElementById('puppy-quiz').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get answers
    const walks = document.querySelector('input[name="walks"]:checked')?.value;
    const size = document.querySelector('input[name="size"]:checked')?.value;
    const pets = document.querySelector('input[name="pets"]:checked')?.value;
    const living = document.querySelector('input[name="living"]:checked')?.value;
    const experience = document.querySelector('input[name="experience"]:checked')?.value;

    // Validate answers
    if (!walks || !size || !pets || !living || !experience) {
        document.getElementById('quiz-results').innerHTML = '<p>Please answer all questions.</p>';
        return;
    }

    // Calculate score (simple example)
    let score = 0;

    if (walks === 'long') score += 2;
    if (walks === 'medium') score += 1;
    if (size === 'large') score += 2;
    if (size === 'medium') score += 1;
    if (pets === 'yes') score += 1;
    if (living === 'house') score += 2;
    if (experience === 'lots') score += 2;
    if (experience === 'some') score += 1;

    // Determine matching profile (simple example)
    let result = '';

    if (score >= 8) {
        result = 'You need a very active and large dog, someone who loves the outdoors. A golden retriever or a german shepard would be a great fit for you.';
    } else if (score >= 5) {
        result = 'You need a medium-sized, somewhat active dog. A beagle or a terrier would be a great fit for you.';
    } else {
        result = 'You need a small, calm dog. A chihuahua or a pug would be a great fit for you.';
    }

    // Display results
    document.getElementById('quiz-results').innerHTML = `
        <h2>Your Perfect Puppy Match!</h2>
        <p>${result}</p>
