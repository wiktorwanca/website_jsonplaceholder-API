const searchInput = document.getElementById('searchInput');
const cardTitles = document.querySelectorAll('.card-title');
const cardContainers = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();

    cardContainers.forEach((cardContainer) => {
        const cardTitle = cardContainer.querySelector('.card-title');
        const title = cardTitle.innerText.toLowerCase();

        if (title.includes(searchValue)) {
            cardContainer.style.display = 'block';
        } else {
            cardContainer.style.display = 'none';
        }
    });
});