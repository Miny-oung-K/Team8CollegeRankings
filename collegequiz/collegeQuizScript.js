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

    if (q7 && q7.value === 'Yes') RevelleCount++;
    if (q7 && q7.value === 'Yes') ERCCount++;
    if (q7 && q7.value === 'Yes') MuirCount++;
    if (q7 && q7.value === 'Yes') SixthCount++;
    if (q7 && q7.value === 'Yes') MarshallCount++;
    if (q7 && q7.value === 'Yes') WarrenCount++;
    if (q7 && q7.value === 'Yes') EighthCount++;
    if (q7 && q7.value === 'No') SeventhCount++;

    if (q8 && q8.value === 'Less than 5 minutes') SixthCount++;
    if (q8 && q8.value === '5-10 minutes') WarrenCount++;
    if (q8 && q8.value === '5-10 minutes') MuirCount++;
    if (q8 && q8.value === '10-15 minutes') MarshallCount++;
    if (q8 && q8.value === '10-15 minutes') ERCCount++;
    if (q8 && q8.value === '10-15 minutes') RevelleCount++;
    if (q8 && q8.value === 'More than 15 minutes') SeventhCount++;
    if (q8 && q8.value === 'More than 15 minutes') EighthCount++;

    if (q9 && q9.value === 'Yes') SeventhCount++;
    if (q9 && q9.value === 'Yes') MarshallCount++;
    if (q9 && q9.value === 'Yes') MuirCount++;
    if (q9 && q9.value === 'Yes') SeventhCount++;
    if (q9 && q9.value === 'Yes') SixthCount++;
    if (q9 && q9.value === 'Yes') ERCCount++;
    if (q9 && q9.value === 'No') WarrenCount++;
    if (q9 && q9.value === 'No') EighthCount++;
    if (q9 && q.value === 'No') RevelleCount++;

    // Determine the result based on the counts
    let resultText = '';
    colleges = [SeventhCount, MarshallCount, MuirCount, SixthCount, WarrenCount, RevelleCount, EighthCount, ERCCount];
    for (let i = 0; i < colleges.length; i++)
    {
        
    }

    // Display the result on the page
    document.getElementById('result').innerText = resultText;
}