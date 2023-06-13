function fetchUserFromJSONPLACEHOLDER(userIndex, elementID, imgID, textID) {
    return Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/photos')
    ])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(([users, photos]) => {
            const user = users[userIndex];
            const firstPhoto = photos[userIndex];

            const cardTitle = document.getElementById(elementID);
            cardTitle.innerText = user.name;

            const cardImage = document.getElementById(imgID);
            cardImage.src = firstPhoto.thumbnailUrl;
            cardImage.alt = firstPhoto.title;

            const cardText = document.getElementById(textID);
            cardText.innerText = user.email;
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function runPerformanceTest() {
    const startTime = performance.now();

    fetchUserFromJSONPLACEHOLDER(0, "firstCardTitle", "firstCardImage", "firstCardText")
        .then(() => {
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            console.log(`Performance Test Execution Time: ${executionTime} milliseconds`);
        });

    fetchUserFromJSONPLACEHOLDER(1, "secondCardTitle", "secondCardImage", "secondCardText")
        .then(() => {
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            console.log(`Performance Test Execution Time: ${executionTime} milliseconds`);
        });
}

runPerformanceTest();