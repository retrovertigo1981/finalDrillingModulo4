function* numberGeneratorOne() {
  let num = 1;
  while (num <= 5) {
    yield num;
    num++;
  }
}

function* numberGeneratorTwo() {
  let num = 6;
  while (num <= 10) {
    yield num;
    num++;
  }
}

function* numberGeneratorThree() {
  let num = 12;
  while (num <= 16) {
    yield num;
    num++;
  }
}

export { numberGeneratorOne, numberGeneratorTwo, numberGeneratorThree };
