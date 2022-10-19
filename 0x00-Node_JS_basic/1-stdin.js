// display message Welcome to Holberton School, what is your name?
// user should be able to pinput their name on a new line
// program should display Your name is: INPUT
// when the user ends the program it should display This important software is now closing

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name? ', (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
