require('bootstrap'); // Import Bootstrap JavaScript (including Popper.js)

var cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', function () {
        let tooth = card.firstElementChild.firstElementChild
        tooth.classList.add('tooth1');
    })
    card.addEventListener('mouseout', function () {
        let tooth = card.firstElementChild.firstElementChild
        tooth.classList.remove('tooth1');
    })
})