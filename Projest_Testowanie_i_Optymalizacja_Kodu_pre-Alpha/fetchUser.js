function fetchUserFromJSONPLACEHOLDER(userIndex, elementID, imgID, textID) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const user = users[userIndex];

            const cardTitle = document.getElementById(elementID);
            cardTitle.innerText = user.name;
        })
        .catch(error => {
            console.log('Error:', error);
        });


    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos => {
            const firstPhoto = photos[userIndex];

            const cardImage = document.getElementById(imgID);
            cardImage.src = firstPhoto.thumbnailUrl;
            cardImage.alt = firstPhoto.title;
        })
        .catch(error => {
            console.log('Error:', error);
        });


    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const user = users[userIndex];

            const cardText = document.getElementById(textID);
            cardText.innerText = user.email;

        })
        .catch(error => {
            console.log('Error:', error);
        });

    return 1;
}



fetchUserFromJSONPLACEHOLDER(0, "firstCardTitle", "firstCardImage", "firstCardText");
fetchUserFromJSONPLACEHOLDER(1, "secondCardTitle", "secondCardImage", "secondCardText");

module.exports = fetchUserFromJSONPLACEHOLDER;