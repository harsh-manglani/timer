const clock = document.getElementById('box');
const timer = document.getElementById('timer')
let secs = 0
let mins = 0
let hrs = 0

setInterval(() => {
    secs++
    clock.textContent = secs
    if (Number.isInteger(secs/60)) {
        if (hrs>=1) {
            mins++;
            timer.textContent = `timer: ${mins}min, ${hrs}hrs`;
        }
        else {
            mins++
            timer.textContent = `timer: ${mins}min`;
        }
}
    if (Number.isInteger(mins/60) && mins/60) {
        mins /= 60
        hrs++
        timer.textContent = `timer: ${mins}min, ${hrs}hrs`;
    }

}, 1000)


