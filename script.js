//elements

const clock = document.getElementById('box');
const timer = document.getElementById('timer')

const toggleTimer = document.getElementById('toggle-time')
const toggleFlow = document.getElementById('toggle-flow')
const toggleSpeed = document.getElementById('toggle-speed')

//variables
const up = true
const down = false


let secs = 0
let mins = 0
let hrs = 0

let toggleStatusTimer = false;
let toggleStatusFlow = up;
const speeds = ['0.25', '0.50', '0.75', '1', '1.25', '1.50', '2', '2.50', '3'];
let speedIndex = 3;

//timer function
function Timer() {
    {
    if (toggleStatusTimer) {
        if (toggleStatusFlow) {secs++} else {secs--}
        
        clock.textContent = secs

        if (Number.isInteger(secs/60) && (secs)) {
            if (hrs>=1) {
                if (toggleStatusFlow) {mins++} else {mins--}
                timer.textContent = `timer: ${mins}min, ${hrs}hrs`;
            }
            else {
                if (toggleStatusFlow) {mins++} else {mins--}
                timer.textContent = `timer: ${mins}min`;
            }
    }
        if (Number.isInteger(mins/60) && (mins||hrs>0)) {
            mins /= 60
            if (toggleStatusFlow) {hrs++} else {hrs--}
            timer.textContent = `timer: ${mins}min, ${hrs}hrs`;
}}
}
}

//timer control
toggleTimer.addEventListener('click', () => {
    if (toggleStatusTimer) {
        toggleStatusTimer = false
        toggleTimer.textContent = 'Start'
    }
    else {
        toggleStatusTimer = true
        toggleTimer.textContent = 'Stop'
    }
})

//initial interval
let intervalId = setInterval(Timer, 1000);

//speed control
toggleSpeed.addEventListener('click', () => {
    clearInterval(intervalId)
    
    if ((speedIndex)===8) {
        speedIndex = 0
        toggleSpeed.textContent = `${speeds[speedIndex]}x`
    }
    else {
        speedIndex++
        toggleSpeed.textContent = `${speeds[speedIndex]}x`
    }
    let speed = 1000 / Number(speeds[speedIndex])
    intervalId = setInterval(Timer, (speed))
    console.log(speed)
})

//flow control
toggleFlow.addEventListener('click', () => {
    if (toggleStatusFlow) {
        toggleStatusFlow = down;
        toggleFlow.textContent = 'Count: Down';
    } 
    else {
        toggleStatusFlow = up;
        toggleFlow.textContent = 'Count: Up';
    }
})

