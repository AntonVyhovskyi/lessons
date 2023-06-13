const left = document.querySelectorAll('.objekte__button-left')
const right = document.querySelectorAll('.objekte__button-right')
const allImages = document.querySelectorAll('.objekte__image')
right.forEach(element => {
    element.addEventListener('click', function() {
        const elementValue = element.dataset.karusel;
        let searchElement = `.objekte__karusel-content[data-karusel="${elementValue}"]`;
        const karusel = document.querySelector(searchElement);
        const karuselFirstElement = karusel.querySelector('div:first-child');
        karusel.insertBefore(karuselFirstElement, karusel.lastChild);
        const karuselElements = karusel.querySelectorAll('div')
        for (let index = 0; index < karuselElements.length; index++) {
            const element = karuselElements[index];
            console.log(element);
            element.style.animationName = 'right';
            setTimeout(() => {
                element.style.animationName = 'null';
              }, 300);
            };
    })
});

left.forEach(element => {
    element.addEventListener('click', function() {
        const elementValue = element.dataset.karusel;
        let searchElement = `.objekte__karusel-content[data-karusel="${elementValue}"]`;
        const karusel = document.querySelector(searchElement);
        const karuselLastElement = karusel.querySelector('div:last-child');
        karusel.insertBefore(karuselLastElement, karusel.firstChild);
        const karuselElements = karusel.querySelectorAll('div')
        for (let index = 0; index < karuselElements.length; index++) {
            const element = karuselElements[index];
            element.style.animationName = 'left';
            setTimeout(() => {
                element.style.animationName = 'null';
              }, 300);
            };
            

    })
});

allImages.forEach(element => {
    element.addEventListener('click', function() {
        element.classList.toggle('overwindow')
    })
});