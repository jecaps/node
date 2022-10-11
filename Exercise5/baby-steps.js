const numbers = process.argv.slice(2);

const newNums = numbers.map((number) => +number);

function add() {
  console.log(
    `The Result is ${newNums.reduce((partialSum, a) => partialSum + a, 0)}`
  );
}

add();
