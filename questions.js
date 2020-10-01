//Demonstration of stdout and std in capabilities of node.js

const questions = [
    "What is your name?",
    "What would your rather be doing?",
    "What time will you get up tomorrow?"
]

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();

//Create array to hold answers
const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    }
    else {
        process.exit();
    }
})

process.on("exit", () => {
    //destructure answers array so we can clearly identify items in set
    const [name, activity, timeToStart] = answers;
    console.log(`
Thank you for your answers!

Go ${activity} ${name} tomorrow at ${timeToStart}
    
`)
}
)



