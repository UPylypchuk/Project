const contentInfo = [
    {
        image: '../static/images/space-nebula.jpeg',
        text: 'Kosmiczne mgławice, rozległe chmury pyłu i gazów, to niebiańskie gobeliny ozdobione żywymi kolorami.'
    },
    {
        image: '../static/images/blueandpurle.png',
        text: 'W kosmicznej przestrzeni, pośród chmur niebieskiego i fioletowego popiołu, gwiazdy wyłaniają się jako niebiańskie latarnie.'
    },
];

let currentIndex = 0;
const imageElement = document.getElementById('image');
const textElement = document.getElementById('text');

// Функция для обновления контента
function updateContent() {
    imageElement.style.opacity = '0';
    textElement.style.opacity = '0';

    setTimeout(() => {
        imageElement.src = contentInfo[currentIndex].image;
        textElement.textContent = contentInfo[currentIndex].text;

        imageElement.style.opacity = '1';
        textElement.style.opacity = '1';

        currentIndex = (currentIndex + 1) % contentInfo.length;
    }, 1000);
}

setInterval(updateContent, 10000);