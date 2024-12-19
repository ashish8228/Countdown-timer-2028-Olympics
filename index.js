// countdown.js

// Set the date and time we're counting down to
let countdownDate = new Date("July 21, 2028 23:59:59").getTime();

// Update the countdown every second
let countdownFunction = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the countdown date
    let distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="time"
    document.getElementById("time").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";
}, 1000);
