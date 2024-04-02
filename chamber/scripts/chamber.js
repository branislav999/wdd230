document.getElementById('last-modified').textContent += document.lastModified;

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
})


document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    var messageDiv = document.getElementById("message");

    var lastVisit = localStorage.getItem("lastVisit");

    var currentTime = Date.now();

    if (lastVisit) {
        var timeDifference = currentTime - parseInt(lastVisit);

        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            messageDiv.textContent = "Back so soon! Awesome!";
        } else {
            var message;
            if (daysDifference === 1) {
                message = "You last visited 1 day ago.";
            } else {
                message = "You last visited " + daysDifference + " days ago.";
            }
            messageDiv.textContent = message;
        }
    } else {

        messageDiv.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", currentTime);
});





