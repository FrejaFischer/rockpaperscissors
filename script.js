"use strict";

const playerHand = document.querySelector("#player1");
const comHand = document.querySelector("#player2");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissors");
const againButton = document.getElementById("again");

window.addEventListener("load", playReady);

function playReady() {
  console.log("playReady");
  rockButton.addEventListener("click", playerRock);
  paperButton.addEventListener("click", playerPaper);
  scissorButton.addEventListener("click", playerScissor);

  comHand.classList.add("rock");
  comHand.classList.remove("paper");
  comHand.classList.remove("scissors");
  playerHand.classList.add("rock");
  playerHand.classList.remove("paper");
  playerHand.classList.remove("scissors");
  document.getElementById("draw").classList.add("hidden");
  document.getElementById("win").classList.add("hidden");
  document.getElementById("lose").classList.add("hidden");

  againButton.removeEventListener("click", playReady);
}

//Players chosen moves
function playerRock() {
  console.log("rock");
  rockButton.removeEventListener("click", playerRock);
  paperButton.removeEventListener("click", playerPaper);
  scissorButton.removeEventListener("click", playerScissor);
  document.querySelector("#buttons").classList.add("disabled");

  playerHand.classList.add("shake");
  comHand.classList.add("shake");

  let rndNum1 = generateRandomNumber(3);

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  generateRandomNumber();
  console.log(rndNum1);

  if (rndNum1 === 1) {
    comHand.classList.add("rock");
    playerHand.classList.add("rock");
    playerHand.addEventListener("animationend", comRock);
  }
  if (rndNum1 === 2) {
    comHand.classList.add("paper");
    playerHand.classList.add("rock");
    playerHand.addEventListener("animationend", comPaper);
  }
  if (rndNum1 === 3) {
    comHand.classList.add("scissors");
    playerHand.classList.add("rock");
    playerHand.addEventListener("animationend", comscissor);
  }
}

function playerPaper() {
  console.log("paper");
  rockButton.removeEventListener("click", playerRock);
  paperButton.removeEventListener("click", playerPaper);
  scissorButton.removeEventListener("click", playerScissor);
  document.querySelector("#buttons").classList.add("disabled");

  playerHand.classList.remove("rock");
  comHand.classList.remove("rock");

  playerHand.classList.add("shake");
  comHand.classList.add("shake");

  let rndNum2 = generateRandomNumber(3);

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  generateRandomNumber();
  console.log(rndNum2);

  if (rndNum2 === 1) {
    comHand.classList.add("rock");
    playerHand.classList.add("paper");
    playerHand.addEventListener("animationend", comRock);
  }
  if (rndNum2 === 2) {
    comHand.classList.add("paper");
    playerHand.classList.add("paper");
    playerHand.addEventListener("animationend", comPaper);
  }
  if (rndNum2 === 3) {
    comHand.classList.add("scissors");
    playerHand.classList.add("paper");
    playerHand.addEventListener("animationend", comscissor);
  }
}

function playerScissor() {
  console.log("scissor");
  rockButton.removeEventListener("click", playerRock);
  paperButton.removeEventListener("click", playerPaper);
  scissorButton.removeEventListener("click", playerScissor);
  document.querySelector("#buttons").classList.add("disabled");

  playerHand.classList.remove("rock");
  comHand.classList.remove("rock");

  playerHand.classList.add("shake");
  comHand.classList.add("shake");

  let rndNum3 = generateRandomNumber(3);

  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  generateRandomNumber();
  console.log(rndNum3);

  if (rndNum3 === 1) {
    comHand.classList.add("rock");
    playerHand.classList.add("scissors");
    playerHand.addEventListener("animationend", comRock);
  }
  if (rndNum3 === 2) {
    comHand.classList.add("paper");
    playerHand.classList.add("scissors");
    playerHand.addEventListener("animationend", comPaper);
  }
  if (rndNum3 === 3) {
    comHand.classList.add("scissors");
    playerHand.classList.add("scissors");
    playerHand.addEventListener("animationend", comscissor);
  }
}

//Results after what computers move is
function comRock() {
  comHand.classList.remove("shake");
  playerHand.classList.remove("shake");

  console.log(this);

  if (this.className === "player rock") {
    console.log("tie");
    //it´s a tie
    document.getElementById("draw").classList.remove("hidden");
    document.querySelector("#buttons").classList.remove("disabled");
    // againButton.classList.remove("hidden");
    // againButton.addEventListener("click", playReady);
  }
  if (this.className === "player paper") {
    console.log("win");
    document.getElementById("win").classList.remove("hidden");
    document.querySelector("#buttons").classList.remove("disabled");
    // againButton.classList.remove("hidden");
    // againButton.addEventListener("click", playReady);
  }
  if (this.className === "player scissors") {
    console.log("lose");
    document.getElementById("lose").classList.remove("hidden");
    document.querySelector("#buttons").classList.remove("disabled");
    // againButton.classList.remove("hidden");
    // againButton.addEventListener("click", playReady);
  }
}

function comPaper() {
  comHand.classList.remove("shake");
  playerHand.classList.remove("shake");

  console.log(this);

  if (this.className === "player paper") {
    console.log("tie");
    //it´s a tie
    document.getElementById("draw").classList.remove("hidden");
    document.querySelector("#buttons").classList.remove("disabled");
    // againButton.classList.remove("hidden");
    // againButton.addEventListener("click", playReady);
  }
  if (this.className === "player scissors") {
    console.log("win");
    document.getElementById("win").classList.remove("hidden");
    document.querySelector("#buttons").classList.remove("disabled");
    // againButton.classList.remove("hidden");
    // againButton.addEventListener("click", playReady);
  }
  if (this.className === "player rock") {
    console.log("lose");
    document.getElementById("lose").classList.remove("hidden");
    document.querySelector("#buttons").classList.remove("disabled");
    // againButton.classList.remove("hidden");
    // againButton.addEventListener("click", playReady);
  }
}

function comscissor() {
  comHand.classList.remove("shake");
  playerHand.classList.remove("shake");

  console.log(this);

  if (this.className === "player scissors") {
    console.log("tie");
    //it´s a tie
    document.getElementById("draw").classList.remove("hidden");
    document.querySelector("#buttons").classList.remove("disabled");
    // againButton.classList.remove("hidden");
    // againButton.addEventListener("click", playReady);
  }
  if (this.className === "player rock") {
    console.log("win");
    document.getElementById("win").classList.remove("hidden");
    document.querySelector("#buttons").classList.remove("disabled");
    // againButton.classList.remove("hidden");
    // againButton.addEventListener("click", playReady);
  }
  if (this.className === "player paper") {
    console.log("lose");
    document.getElementById("lose").classList.remove("hidden");
    document.querySelector("#buttons").classList.remove("disabled");
    // againButton.classList.remove("hidden");
    // againButton.addEventListener("click", playReady);
  }
}
