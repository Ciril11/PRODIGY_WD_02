// Initialize time values
let [seconds, minutes, hours] = [0, 0, 0];
 

// Variable to store interval ID
let timer = null;

// Get elements
let display = document.getElementById("display");
let startBtn = document.getElementById("startPause");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let lapsList = document.getElementById("laps");

// Handle Start/Pause button click
startBtn.addEventListener("click", function () {
  if (timer === null) {
    timer = setInterval(updateTime, 1000);
    startBtn.textContent = "Pause";
  } else {
    clearInterval(timer);
    timer = null;
    startBtn.textContent = "Start";
  }
});

// Handle Reset button click
resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.textContent = "00:00:00";
  lapsList.innerHTML = "";
  startBtn.textContent = "Start";
});

// Handle Lap button click
lapBtn.addEventListener("click", function () {
  if (timer !== null) {
    let lapItem = document.createElement("li");
    lapItem.textContent = "Lap: " + display.textContent;
    lapsList.appendChild(lapItem);
  }
});

// Function to update the stopwatch time
function updateTime() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = h + ":" + m + ":" + s;
}
