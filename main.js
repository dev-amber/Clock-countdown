onst enddate = "25  augest 2024 5:00 PM";
document.getElementById("end-date").innerText = enddate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) {
        inputs[0].value = 0;
        inputs[1].value = 0;
        return;
    }

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor((diff / 3600) % 24);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = Math.floor((diff) % 60);

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value=  seconds;
}

clock();
setInterval(clock, 1000);
