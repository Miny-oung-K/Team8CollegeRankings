// personality-quiz/quizScript.js

// This function calculates the quiz result based on the user's answers
function calculateResult() {
    // Get the selected values for each question
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    const q8 = document.querySelector('input[name="q8"]:checked');
    const q9 = document.querySelector('input[name="q9"]:checked');

    // Initialize variables to keep track of personality types
    let EighthCount = 0;
    let SixthCount = 0;
    let RevelleCount = 0;
    let MuirCount = 0;
    let ERCCount = 0;
    let MarshallCount = 0;
    let SeventhCount = 0;
    let WarrenCount = 0;

    // Check the answers for each question
    if (q1 && q1.value === 'introvert') introvertCount++;
    if (q1 && q1.value === 'extrovert') extrovertCount++;

    if (q2 && q2.value === 'introvert') introvertCount++;
    if (q2 && q2.value === 'extrovert') extrovertCount++;

    if (q3 && q3.value === 'introvert') introvertCount++;
    if (q3 && q3.value === 'extrovert') extrovertCount++;

    if (q4 && q4.value === 'introvert') introvertCount++;
    if (q4 && q4.value === 'extrovert') extrovertCount++;

    if (q5 && q5.value === 'introvert') introvertCount++;
    if (q5 && q5.value === 'extrovert') extrovertCount++;

    if (q6 && q6.value === 'introvert') introvertCount++;
    if (q6 && q6.value === 'extrovert') extrovertCount++;

    if (q7 && q7.value === 'introvert') introvertCount++;
    if (q7 && q7.value === 'extrovert') extrovertCount++;

    if (q8 && q8.value === 'introvert') introvertCount++;
    if (q8 && q8.value === 'extrovert') extrovertCount++;

    if (q9 && q9.value === 'introvert') introvertCount++;
    if (q9 && q.value === 'extrovert') extrovertCount++;

    // Determine the result based on the counts
    let resultText = '';
    if (introvertCount > extrovertCount) {
        resultText = 'You are more of an Introvert!';
    } else if (extrovertCount > introvertCount) {
        resultText = 'You are more of an Extrovert!';
    } else {
        resultText = 'You have a balanced personality!';
    }

    // Display the result on the page
    document.getElementById('result').innerText = resultText;
}