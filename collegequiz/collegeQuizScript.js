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

    if (q4 && q4.value === 'Residential Halls') ERCCount+=2;
    if (q4 && q4.value === 'Residential Halls') WarrenCount++;
    if (q4 && q4.value === 'Residential Halls') MarshallCount++;
    if (q4 && q4.value === 'Residential Halls') MuirCount++;
    if (q4 && q4.value === 'Residential Halls') RevelleCount++;
    if (q4 && q4.value === 'Residential Halls') SixthCount++;
    if (q4 && q4.value === 'Residential Halls') EighthCount+=2;
    if (q4 && q4.value === 'Apartment Style') SeventhCount++;
    if (q4 && q4.value === 'Apartment Style') EighthCount+=2;
    if (q4 && q4.value === 'Apartment Style') ERCCount+=2;

    if (q5 && q5.value === 'Yes') SeventhCount++;
    if (q5 && q5.value === 'Yes') EighthCount++;
    if (q5 && q5.value === 'Yes') SixthCount++;
    if (q5 && q5.value === 'Yes') RevelleCount++;
    if (q5 && q5.value === 'Yes') ERCCount++;
    if (q5 && q5.value === 'Yes') MuirCount++;
    if (q5 && q5.value === 'No') MarshallCount++;
    if (q5 && q5.value === 'No') WarrenCount++;

    if (q6 && q6.value === 'Yes') MuirCount++;
    if (q6 && q6.value === 'Yes') SixthCount++;
    if (q6 && q6.value === 'Yes') ERCCount++;
    if (q6 && q6.value === 'Yes') WarrenCount++;
    if (q6 && q6.value === 'No') SeventhCount++;
    if (q6 && q6.value === 'No') EighthCount++;
    if (q6 && q6.value === 'No') RevelleCount++;
    if (q6 && q6.value === 'No') MarshallCount++;

    if (q7 && q7.value === 'introvert') introvertCount++;
    if (q7 && q7.value === 'extrovert') extrovertCount++;

    if (q8 && q8.value === 'introvert') introvertCount++;
    if (q8 && q8.value === 'extrovert') extrovertCount++;

    if (q9 && q9.value === 'introvert') introvertCount++;
    if (q9 && q.value === 'extrovert') extrovertCount++;

    // Determine the result based on the counts
    let resultText = '';
    collegesCount = [SeventhCount, MarshallCount, MuirCount, SixthCount, WarrenCount, RevelleCount, EighthCount, ERCCount];

    collegesCount.sort((a, b) => b - a);
    for (i = 0; i < collegesCount.length; i++)
    {
        resultText += collegesCount[i] + '\n';
    }
    
    // Display the result on the page
    document.getElementById('result').innerText = resultText;
}