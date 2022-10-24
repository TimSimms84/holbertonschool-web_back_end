// display message Welcome to Holberton School, what is your name?
// user should be able to pinput their name on a new line
// program should display Your name is: INPUT
// when the user ends the program it should display This important software is now closing

console.log('Welcome to Holberton school, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
