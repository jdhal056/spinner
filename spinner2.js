let array = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 100;

const timer = (stringToPrint, time) => {
  setTimeout(() => {
    process.stdout.write(`\r${stringToPrint}    `);
  }, time);
};

for (const char of array) {
  timer(char, time);
  time += 200;
};