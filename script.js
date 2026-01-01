//elements

const clock = document.getElementById('box');
const timer = document.getElementById('timer')

const toggleTimer = document.getElementById('toggle-time')
const toggleFlow = document.getElementById('toggle-flow')
const toggleSpeed = document.getElementById('toggle-speed')

//variables
let secs = 0
let timer_secs = 0;
let timer_mins = 0;
let timer_hrs = 0

let toggleStatusTimer = false;

const toggleStatusFlow = {UP:1, DOWN:-1};
let currentFlow = toggleStatusFlow.UP;
const speeds = ['0.25', '0.50', '0.75', '1', '1.25', '1.50', '2', '2.50', '3'];
let speedIndex = 3;

//timer function
function Timer() {
    if (toggleStatusTimer){
        secs += currentFlow

        timer_secs = secs%60
        timer_mins = (Math.trunc(secs/60))%60
        timer_hrs = Math.trunc(secs/3600)

        timer.textContent = `${timer_hrs}:${timer_mins}:${timer_secs}`
        clock.textContent = secs
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

//flow control
toggleFlow.addEventListener('click', () => {
    if (currentFlow === toggleStatusFlow.UP) {
        currentFlow = toggleStatusFlow.DOWN;
        toggleFlow.textContent = 'Count: Down';
    } 
    else {
        currentFlow = toggleStatusFlow.UP;
        toggleFlow.textContent = 'Count: Up';
    }
})

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
})