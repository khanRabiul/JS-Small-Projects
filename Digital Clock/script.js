const hourE1 = document.getElementById("hour");
const miniutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

// making function to get current time
function updateClock (){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"; // By default am

    if(h > 12) {
        h = h - 12; // Makes 12h clock
        ampm = "PM"; // If h is greater than 12 (ampm = "PM")
    }

// To make Two digit number for single digits
// If h/m/s is less than 10 add 0;
    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;

// Including h/m/s values to the html elements
    hourE1.innerText = h;
    miniutesE1.innerText = m;
    secondsE1.innerText = s;
// update every seconds
    ampmE1.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
// call the function
updateClock();

