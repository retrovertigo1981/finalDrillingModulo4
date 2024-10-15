import { cardOne, cardTwo, cardThree } from "./cards.mjs";
import {
  numberGeneratorOne,
  numberGeneratorTwo,
  numberGeneratorThree,
} from "./generatorsFunctions.mjs";
import fetchData from "./fetchData.mjs";

// manipulacion del DOM

const mainCardOne = document.querySelector(".mainCardOne");
const mainCardTwo = document.querySelector(".mainCardTwo");
const mainCardThree = document.querySelector(".mainCardThree");

const generatorOne = numberGeneratorOne();
const generatorTwo = numberGeneratorTwo();
const generatorThree = numberGeneratorThree();

mainCardOne.addEventListener("mouseenter", async () => {
  const { value, done } = generatorOne.next();

  if (done) {
    mainCardOne.removeEventListener("mouseenter", arguments[0]);
    return;
  }

  const data = await fetchData(value);
  const cardResult = cardOne(data);

  await mainCardOne.parentNode.insertAdjacentHTML("beforeend", cardResult);
});

mainCardTwo.addEventListener("mouseenter", async () => {
  const { value, done } = generatorTwo.next();

  if (done) {
    mainCardTwo.removeEventListener("mouseenter", arguments[0]);
    return;
  }
  const data = await fetchData(value);
  const cardResult = cardTwo(data);

  await mainCardTwo.parentNode.insertAdjacentHTML("beforeend", cardResult);
});

mainCardThree.addEventListener("mouseenter", async () => {
  const { value, done } = generatorThree.next();

  if (done) {
    mainCardThree.removeEventListener("mouseenter", arguments[0]);
    return;
  }

  const data = await fetchData(value);
  const cardResult = cardThree(data);

  await mainCardThree.parentNode.insertAdjacentHTML("beforeend", cardResult);
});
