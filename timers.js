//Exercise to demonstrate use of thread control/timeout.

const waitTime=5000;
const waitInterval=1000;


let currentTime = 0;
console.log(`Setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    console.log("done");
    clearInterval(interval);
}

const incrementTime = () => {
    currentTime += waitInterval;
    console.log(`Waiting ${currentTime/1000} seconds`);
}

setTimeout(timerFinished, waitTime);
const interval = setInterval(incrementTime, waitInterval);