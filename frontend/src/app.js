require('bootstrap'); // Import Bootstrap JavaScript (including Popper.js)

var cards = document.querySelectorAll('.card-body');

cards.forEach(card => {
    card.addEventListener('mouseover', function () {
        let tooth = card.firstElementChild
        tooth.classList.add('tooth1');
    })
    card.addEventListener('mouseout', function () {
        let tooth = card.firstElementChild
        tooth.classList.remove('tooth1');
    })
})