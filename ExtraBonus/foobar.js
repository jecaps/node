function neueFische() {
  for (let i = 1; i <= 100; i++) {
    i % 3 === 0 && i % 5 === 0
      ? console.log("neuefische")
      : i % 5 === 0
      ? console.log("fische")
      : i % 3 === 0
      ? console.log("neue")
      : console.log(i);
  }
}

neueFische();
