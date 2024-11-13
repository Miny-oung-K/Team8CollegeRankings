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
    // Question 1: What department is your major in?
    if (q1 && q1.value === 'Arts & Humanities') EighthCount += 8;
    if (q1 && q1.value === 'Arts & Humanities') SixthCount += 7;
    if (q1 && q1.value === 'Arts & Humanities') RevelleCount += 6;
    if (q1 && q1.value === 'Arts & Humanities') MuirCount += 5;
    if (q1 && q1.value === 'Arts & Humanities') ERCCount += 4;
    if (q1 && q1.value === 'Arts & Humanities') MarshallCount += 3;
    if (q1 && q1.value === 'Arts & Humanities') SeventhCount += 2;
    if (q1 && q1.value === 'Arts & Humanities') WarrenCount += 1;

    if (q1 && q1.value === 'Biological Sciences') RevelleCount += 8;
    if (q1 && q1.value === 'Biological Sciences') MarshallCount += 7;
    if (q1 && q1.value === 'Biological Sciences') WarrenCount += 6;
    if (q1 && q1.value === 'Biological Sciences') EighthCount += 5;
    if (q1 && q1.value === 'Biological Sciences') MuirCount += 4;
    if (q1 && q1.value === 'Biological Sciences') ERCCount += 3;
    if (q1 && q1.value === 'Biological Sciences') SeventhCount += 2;
    if (q1 && q1.value === 'Biological Sciences') SixthCount += 1;

    if (q1 && q1.value === 'Data Science') WarrenCount += 8;
    if (q1 && q1.value === 'Data Science') SeventhCount += 7;
    if (q1 && q1.value === 'Data Science') EighthCount += 6;
    if (q1 && q1.value === 'Data Science') SixthCount += 5;
    if (q1 && q1.value === 'Data Science') RevelleCount += 4;
    if (q1 && q1.value === 'Data Science') MuirCount += 3;
    if (q1 && q1.value === 'Data Science') MarshallCount += 2;
    if (q1 && q1.value === 'Data Science') ERCCount += 1;

    if (q1 && q1.value === 'Engineering') WarrenCount += 8;
    if (q1 && q1.value === 'Engineering') SeventhCount += 7;
    if (q1 && q1.value === 'Engineering') RevelleCount += 6;
    if (q1 && q1.value === 'Engineering') SixthCount += 5;
    if (q1 && q1.value === 'Engineering') EighthCount += 4;
    if (q1 && q1.value === 'Engineering') MuirCount += 3;
    if (q1 && q1.value === 'Engineering') MarshallCount += 2;
    if (q1 && q1.value === 'Engineering') ERCCount += 1;

    if (q1 && q1.value === 'Health Sciences') RevelleCount += 8;
    if (q1 && q1.value === 'Health Sciences') MarshallCount += 7;
    if (q1 && q1.value === 'Health Sciences') EighthCount += 6;
    if (q1 && q1.value === 'Health Sciences') WarrenCount += 5;
    if (q1 && q1.value === 'Health Sciences') ERCCount += 4;
    if (q1 && q1.value === 'Health Sciences') MuirCount += 3;
    if (q1 && q1.value === 'Health Sciences') SeventhCount += 2;
    if (q1 && q1.value === 'Health Sciences') SixthCount += 1;

    if (q1 && q1.value === 'Physical Sciences') RevelleCount += 8;
    if (q1 && q1.value === 'Physical Sciences') WarrenCount += 7;
    if (q1 && q1.value === 'Physical Sciences') SeventhCount += 6;
    if (q1 && q1.value === 'Physical Sciences') EighthCount += 5;
    if (q1 && q1.value === 'Physical Sciences') ERCCount += 4;
    if (q1 && q1.value === 'Physical Sciences') MuirCount += 3;
    if (q1 && q1.value === 'Physical Sciences') MarshallCount += 2;
    if (q1 && q1.value === 'Physical Sciences') SixthCount += 1;

    if (q1 && q1.value === 'Scripps Institution of Oceanography') RevelleCount += 8;
    if (q1 && q1.value === 'Scripps Institution of Oceanography') WarrenCount += 7;
    if (q1 && q1.value === 'Scripps Institution of Oceanography') SeventhCount += 6;
    if (q1 && q1.value === 'Scripps Institution of Oceanography') EighthCount += 5;
    if (q1 && q1.value === 'Scripps Institution of Oceanography') ERCCount += 4;
    if (q1 && q1.value === 'Scripps Institution of Oceanography') MuirCount += 3;
    if (q1 && q1.value === 'Scripps Institution of Oceanography') MarshallCount += 2;
    if (q1 && q1.value === 'Scripps Institution of Oceanography') SixthCount += 1;

    if (q1 && q1.value === 'Social Sciences') EighthCount += 8;
    if (q1 && q1.value === 'Social Sciences') MarshallCount += 7;
    if (q1 && q1.value === 'Social Sciences') ERCCount += 6;
    if (q1 && q1.value === 'Social Sciences') MuirCount += 5;
    if (q1 && q1.value === 'Social Sciences') SixthCount += 4;
    if (q1 && q1.value === 'Social Sciences') SeventhCount += 3;
    if (q1 && q1.value === 'Social Sciences') RevelleCount += 2;
    if (q1 && q1.value === 'Social Sciences') WarrenCount += 1;
    
    // Question 2: Which of the following speaks to you the most?
    if (q2 && q2.value === 'Tradition') RevelleCount += 2;
    if (q2 && q2.value === 'Individuality') MuirCount += 2;
    if (q2 && q2.value === 'Diversity') MarshallCount += 2;
    if (q2 && q2.value === 'Sustainability') SeventhCount += 2;
    if (q2 && q2.value === 'Innovative') SixthCount += 2;
    if (q2 && q2.value === 'Global') ERCCount += 2;
    if (q2 && q2.value === 'Community') EighthCount += 2;
    if (q2 && q2.value === 'Ethics') WarrenCount += 2;

    //Question 3: Which dining options fo you prefer? (Select all that apply)
    //Dining Halls
    if (q3 && q3.value === 'Dining Halls') SeventhCount++;
    if (q3 && q3.value === 'Dining Halls') SixthCount += 2;
    if (q3 && q3.value === 'Dining Halls') MuirCount += 2;
    if (q3 && q3.value === 'Dining Halls') RevelleCount += 2;
    if (q3 && q3.value === 'Dining Halls') WarrenCount += 2;
    if (q3 && q3.value === 'Dining Halls') MarshallCount += 2;
    if (q3 && q3.value === 'Dining Halls') ERCCount += 2;
    //Local restaurants
    if (q3 && q3.value === 'Local restaurants') SixthCount += 2;
    if (q3 && q3.value === 'Local restaurants') MuirCount += 2;
    if (q3 && q3.value === 'Local restaurants') WarrenCount += 2;
    //Markets nearby
    if (q3 && q3.value === 'Markets nearby') SeventhCount += 2;
    if (q3 && q3.value === 'Markets nearby') SixthCount += 2;
    if (q3 && q3.value === 'Markets nearby') MuirCount += 2;
    if (q3 && q3.value === 'Markets nearby') RevelleCount += 2;
    if (q3 && q3.value === 'Markets nearby') WarrenCount += 2;

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
    let collegesCount = [SeventhCount, MarshallCount, MuirCount, SixthCount, WarrenCount, RevelleCount, EighthCount, ERCCount];

    collegesCount.sort((a, b) => b - a);
    for (let i = 0; i < collegesCount.length; i++)
    {
        resultText += collegesCount[i] + '\n';
    }
    
    // Display the result on the page
    document.getElementById('result').innerText = resultText;
}