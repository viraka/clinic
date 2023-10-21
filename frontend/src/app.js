require('bootstrap'); // Import Bootstrap JavaScript (including Popper.js)
import axios from 'axios';
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

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("contact-form");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();

//         const formData = new FormData(form);
//         var object = {};
//         formData.forEach(function (value, key) {
//             object[key] = value;
//         });
//         object["subject"] = "A new Query from " + object.name + " through the Dental website";
//         console.log(object);
//         axios.post("/api/send-email", object)
//             .then(function (response) {
//                 console.log("Email sent:", response.data);
//                 // Handle success, e.g., show a success message to the user
//             })
//             .catch(function (error) {
//                 console.error("Error sending email:", error);
//                 // Handle error, e.g., show an error message to the user
//             });
//     });
// }); 