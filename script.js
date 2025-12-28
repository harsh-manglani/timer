const clock = document.getElementById('box');
const timer = document.getElementById('timer')

const toggleTimer = document.getElementById('toggle-time')
const toggleFlow = document.getElementById('toggle-flow')
const up = true
const down = false


let secs = 0
let mins = 0
let hrs = 0

let toggleStatusTimer = false;
let toggleStatusFlow = up;

toggleFlow.addEventListener('click', () => {
    if (toggleStatusFlow) {
        toggleStatusFlow = down;
        toggleFlow.textContent = 'Flow: Down';
    } 
    else {
        toggleStatusFlow = up;
        toggleFlow.textContent = 'Flow: Up';
    }
})

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

setInterval(() => {
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
}

}

}, 1)




