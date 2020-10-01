//Exercise to demonstrate use of thread control/timeout.

const waitTime=5000;
const waitInterval=1000;


let currentTime = 0;
console.log(`Setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`Done`);
    clearInterval(interval);
}

const incrementTime = () => {
    currentTime += waitInterval;
    const p = Math.floor ((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting...${p}%`);
}

setTimeout(timerFinished, waitTime);
const interval = setInterval(incrementTime, waitInterval);