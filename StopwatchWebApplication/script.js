let startTime;
let updatedTime;
let difference = 0;
let timerInterval;
let running = false;
let laps = 0;

// Get elements
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

// Format time as hh:mm:ss
function formatTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return (
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}

// Start or Stop the stopwatch
function startStop() {
    if (!running) {
        startTime = new Date().getTime() - difference; // Start from where it left off
        timerInterval = setInterval(updateDisplay, 100); // Update every 100ms for smoother display
        startStopBtn.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(timerInterval); // Pause the stopwatch
        difference = new Date().getTime() - startTime;
        startStopBtn.textContent = 'Start';
        running = false;
    }
}

// Update the display
function updateDisplay() {
    updatedTime = new Date().getTime() - startTime;
    display.textContent = formatTime(updatedTime);
}

// Reset the stopwatch
function reset() {
    clearInterval(timerInterval);
    display.textContent = '00:00:00';
    difference = 0;
    running = false;
    startStopBtn.textContent = 'Start';
    laps = 0; // Reset laps to 0
    lapsContainer.innerHTML = ''; // Clear the laps
}

// Record a lap
function recordLap() {
    if (running) {
        laps++;
        const lapItem = document.createElement('li');
lapItem.textContent = `Lap ${laps}: ${formatTime(updatedTime)}`;
        lapsContainer.appendChild(lapItem);
    }
}

// Add event listeners
startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);