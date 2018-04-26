let startBt = document.querySelector('#start'),
    stopBt = document.querySelector('#stop'),
    clearBt = document.querySelector('#clear'),
    display = document.querySelector('#displaySeconds'),
    seconds = 0,
    t;

startBt.addEventListener('click', timer);
stopBt.addEventListener('click', stop);
clearBt.addEventListener('click', clear);

function add() {
    seconds++;
    timer();
    updateTimer();
}

function timer() {
    t = setTimeout(add, 1000);
}

function clear() {
    clearTimeout(t);
    seconds = 0;
    updateTimer();
}

function stop() {
    clearTimeout(t);
}

function updateTimer() {
    display.textContent = seconds;
}