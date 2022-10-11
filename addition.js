const numbers = process.argv.slice(2);

const newNum = numbers.map((number) => +number);

function add() {
  if (newNum.length < 2) {
    console.log("Please enter 2 or more numbers");
  } else if (newNum.some((num) => isNaN(num))) {
    console.log("Please enter a number");
  } else {
    console.log(
      `The Result is ${newNum.reduce((partialSum, a) => partialSum + a, 0)}`
    );
  }
}

add();
