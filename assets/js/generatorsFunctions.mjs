function* numberGeneratorOne() {
  let num = 1;
  while (num <= 5) {
    yield num;
    num++;
  }
}

function* numberGeneratorTwo() {
  let num = 6;
  while (num <= 11) {
    yield num;
    num++;
  }
}

function* numberGeneratorThree() {
  let num = 12;
  while (num <= 17) {
    yield num;
    num++;
  }
}

export { numberGeneratorOne, numberGeneratorTwo, numberGeneratorThree };
