function calculateResult() {
    // Initialize variables to keep track of personality types
    let EighthCount = 0;
    let SixthCount = 0;
    let RevelleCount = 0;
    let MuirCount = 0;
    let ERCCount = 0;
    let MarshallCount = 0;
    let SeventhCount = 0;
    let WarrenCount = 0;

    // Get all selected values for each question using the correct name attributes
    const major = document.querySelector('input[name="major"]:checked');
    const values = document.querySelector('input[name="values"]:checked');
    const diningOptions = document.querySelectorAll('input[name="dining[]"]:checked');
    const housing = document.querySelector('input[name="housing"]:checked');
    const kitchen = document.querySelector('input[name="kitchen"]:checked');
    const llc = document.querySelector('input[name="llc"]:checked');
    const studyRooms = document.querySelector('input[name="study_rooms"]:checked');
    const walkingDistance = document.querySelector('input[name="walking_distance"]:checked');
    const gym = document.querySelector('input[name="gym"]:checked');

    // Question 1: Major
    if (major) {
        if (major.value === 'Arts and Humanities') {
            EighthCount += 8;
            SixthCount += 7;
            RevelleCount += 6;
            MuirCount += 5;
            ERCCount += 4;
            MarshallCount += 3;
            SeventhCount += 2;
            WarrenCount += 1;
        } else if (major.value === 'Biological Sciences') {
            RevelleCount += 8;
            MarshallCount += 7;
            WarrenCount += 6;
            EighthCount += 5;
            MuirCount += 4;
            ERCCount += 3;
            SeventhCount += 2;
            SixthCount += 1;
        } else if (major.value === 'Data Science') {
            WarrenCount += 8;
            SeventhCount += 7;
            EighthCount += 6;
            SixthCount += 5;
            RevelleCount += 4;
            MuirCount += 3;
            MarshallCount += 2;
            ERCCount += 1;
        } else if (major.value === 'Health Sciences') {
            RevelleCount += 8;
            MarshallCount += 7;
            EighthCount += 6;
            WarrenCount += 5;
            ERCCount += 4;
            MuirCount += 3;
            SeventhCount += 2;
            SixthCount += 1;
        } else if (major.value === 'Physical Sciences') {
            RevelleCount += 8;
            WarrenCount += 7;
            SeventhCount += 6;
            EighthCount += 5;
            ERCCount += 4;
            MuirCount += 3;
            MarshallCount += 2;
            SixthCount += 1;
        } else if (major.value === 'Scripps Institution of Oceanography') {
            RevelleCount += 8;
            WarrenCount += 7;
            SeventhCount += 6;
            EighthCount += 5;
            ERCCount += 4;
            MuirCount += 3;
            MarshallCount += 2;
            SixthCount += 1;
        } else if (major.value === 'Social Sciences') {
            EighthCount += 8;
            MarshallCount += 7;
            ERCCount += 6;
            MuirCount += 5;
            SixthCount += 4;
            SeventhCount += 3;
            RevelleCount += 2;
            WarrenCount += 1;
        }
    }

    // Question 2: Values
    if (values) {
        switch (values.value) {
            case 'Tradition':
                RevelleCount += 2;
                break;
            case 'Individuality':
                MuirCount += 2;
                break;
            case 'Diversity':
                MarshallCount += 2;
                break;
            case 'Sustainability':
                SeventhCount += 2;
                break;
            case 'Innovative':
                SixthCount += 2;
                break;
            case 'Global':
                ERCCount += 2;
                break;
            case 'Community':
                EighthCount += 2;
                break;
            case 'Ethics':
                WarrenCount += 2;
                break;
        }
    }

    // Question 3: Dining options (multiple selection)
    diningOptions.forEach(option => {
        switch (option.value) {
            case 'Dining Halls':
                SeventhCount += 2;
                SixthCount += 2;
                MuirCount += 2;
                RevelleCount += 2;
                WarrenCount += 2;
                MarshallCount += 2;
                ERCCount += 2;
                break;
            case 'Local restaurants':
                SixthCount += 2;
                MuirCount += 2;
                WarrenCount += 2;
                break;
            case 'Markets nearby':
                SeventhCount += 2;
                SixthCount += 2;
                MuirCount += 2;
                RevelleCount += 2;
                WarrenCount += 2;
                break;
        }
    });

    // Housing preference
    if (housing) {
        if (housing.value === 'Residential Halls') {
            ERCCount += 2;
            WarrenCount += 1;
            MarshallCount += 1;
            MuirCount += 1;
            RevelleCount += 1;
            SixthCount += 1;
            EighthCount += 2;
        } else if (housing.value === 'Apartment Style') {
            SeventhCount += 1;
            EighthCount += 2;
            ERCCount += 2;
        }
    }

    // Kitchen access
    if (kitchen) {
        if (kitchen.value === 'Yes') {
            SeventhCount++;
            EighthCount++;
            SixthCount++;
            RevelleCount++;
            ERCCount++;
            MuirCount++;
        } else {
            MarshallCount++;
            WarrenCount++;
        }
    }

    // LLC preference
    if (llc) {
        if (llc.value === 'Yes') {
            MuirCount++;
            SixthCount++;
            ERCCount++;
            WarrenCount++;
        } else {
            SeventhCount++;
            EighthCount++;
            RevelleCount++;
            MarshallCount++;
        }
    }

    // Study rooms
    if (studyRooms) {
        if (studyRooms.value === 'Yes') {
            RevelleCount++;
            ERCCount++;
            MuirCount++;
            SixthCount++;
            MarshallCount++;
            WarrenCount++;
            EighthCount++;
        } else {
            SeventhCount++;
        }
    }

    // Walking distance
    if (walkingDistance) {
        switch (walkingDistance.value) {
            case 'Less than 5 minutes':
                SixthCount++;
                break;
            case '5-10 minutes':
                WarrenCount++;
                MuirCount++;
                break;
            case '10-15 minutes':
                MarshallCount++;
                ERCCount++;
                RevelleCount++;
                break;
            case 'More than 15 minutes':
                SeventhCount++;
                EighthCount++;
                break;
        }
    }

    // Gym preference
    if (gym) {
        if (gym.value === 'Yes') {
            SeventhCount++;
            MarshallCount++;
            MuirCount++;
            SeventhCount++;
            SixthCount++;
            ERCCount++;
        } else {
            WarrenCount++;
            EighthCount++;
            RevelleCount++;
        }
    }

    // Calculate final results
    const collegesCount = {
        'Seventh College': SeventhCount,
        'Marshall College': MarshallCount,
        'Muir College': MuirCount,
        'Sixth College': SixthCount,
        'Warren College': WarrenCount,
        'Revelle College': RevelleCount,
        'Eighth College': EighthCount,
        'Eleanor Roosevelt College': ERCCount
    };

    // Sort colleges by score
    const sortedColleges = Object.entries(collegesCount)
        .sort((a, b) => b[1] - a[1])
        .map(([college, score], index) => {
            return `${index + 1}. ${college}: ${score} points`;
        })
        .join('\n');

    // Display the result
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = `<h3>Your College Match Rankings:</h3>\n${sortedColleges}`;
    } else {
        console.error('Result element not found!');
    }
}