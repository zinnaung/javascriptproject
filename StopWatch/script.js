/* Stopwatch */

const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let seconds = 0,
  minutes = 0,
  hours = 0;

const startTime = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;

    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
  }

  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
};

let intervalId;
startButtonTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 1000);
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1000);
});

restartButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (seconds = 0), (minutes = 0), (hours = 0);
  intervalId = setInterval(startTime, 1000);
});
