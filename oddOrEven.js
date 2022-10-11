const number = Number(process.argv[2]);

function isOddOrEven(num) {
  console.log(`The number ${num} is ${num % 2 === 0 ? "even" : "odd"}`);
}

isOddOrEven(number);
