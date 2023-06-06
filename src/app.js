/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function createCard() {
  const cardCharacter = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cardSuit = ["♦", "♥", "♠", "♣"];
  let characterIndex = parseInt(Math.random() * 5987) % 13;
  let suitIndex = parseInt(Math.random() * 5987) % 4;

  let topRow = document.createElement("h1");
  topRow.innerHTML = cardSuit[suitIndex];
  topRow.classList.add("display-5");
  if (suitIndex == 0 || suitIndex == 1) {
    topRow.classList.add("text-danger");
  }

  let bottomRow = document.createElement("h1");
  bottomRow.innerHTML = cardSuit[suitIndex];
  bottomRow.classList.add("display-5");
  bottomRow.classList.add("rotate");
  if (suitIndex == 0 || suitIndex == 1) {
    bottomRow.classList.add("text-danger");
  }

  let centerRow = document.createElement("h1");
  centerRow.innerHTML = cardCharacter[characterIndex];
  centerRow.style.fontSize = "200px";
  centerRow.classList.add("p-0");
  centerRow.classList.add("m-0");
  centerRow.classList.add("text-center");
  centerRow.classList.add("align-middle");
  if (suitIndex == 0 || suitIndex == 1) {
    centerRow.classList.add("text-danger");
  }

  document.querySelector("#top").appendChild(topRow);
  document.querySelector("#center").appendChild(centerRow);
  document.querySelector("#bottom").appendChild(bottomRow);
}

function removeCard() {
  let top = document.querySelector("#top").lastChild;
  top.removeChild(top.lastChild);
  let center = document.querySelector("#center").lastChild;
  center.removeChild(center.lastChild);
  let bottom = document.querySelector("#bottom").lastChild;
  bottom.removeChild(bottom.lastChild);
}

window.onload = createCard();

document.addEventListener("click", function(event) {
  if (event.target.id == "theButton") {
    removeCard();
    createCard();
  }
});
