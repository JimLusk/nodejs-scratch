//destructure the argv array from command line to get desired command line args in meaningful array variables.
const [,,appArg1,appArg2,appArg3,appArg4] = process.argv;

console.log(`Application Argument 1 is ${appArg1}`);
console.log(`Application Argument 2 is ${appArg2}`);
console.log(`Application Argument 3 is ${appArg3}`);
console.log(`Application Argument 4 is ${appArg4}`);