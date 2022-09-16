const newGame = document.getElementById("newgame");
const whacker = document.getElementsByClassName("burrows");
const scoreText = document.getElementById("score");
const mole1id = document.getElementById("mole1");
const mole2id = document.getElementById("mole2");
const mole3id = document.getElementById("mole3");
const mole4id = document.getElementById("mole4");
const mole5id = document.getElementById("mole5");
const mole6id = document.getElementById("mole6");
console.log(whacker);
let score = 0;

// const imageChange1 = () => {
//   mole1id.src = "img/mole.png"
// }
// const clickPleaseWork = () => {
//   if (imageChange1() == true){
//     addOne
//     scoreText.textContent = score
//   }
// }

const dudFunction = () => {
  score = score + 1;
  scoreText.textContent = score;
};

newGame.addEventListener("click", () => {
  // for (i=0; i<100; i++){moleFunc()} //Absolutely not
  moleFunc();
  window.setInterval(moleFunc, 1000); // At least this works
});

const moleFunc = () => {
  let chanceHole = Math.round(Math.random() * 6);
  if (chanceHole == 0 || chanceHole == 1) {
    mole1id.src = "img/mole.png";
    mole1id.addEventListener("click", () => {
      score = score + 1; // Score is also just multiplying exponentially???? Maybe because of setInterval
      scoreText.textContent = score;
    });
    setTimeout(function () {
      mole1id.src = "img/hill.png";
      mole1id.removeEventListener("click", () => {}); //Removes listener but click still causes score to change? Doesn't matter if score/scoretext is in curly
    }, 500);
  } else if (chanceHole == 2) {
    mole2id.src = "img/mole.png";
    mole2id.addEventListener("click", () => {
      score = score + 1; // Score is also just multiplying exponentially???? Maybe because of setInterval
      scoreText.textContent = score;
    });
    setTimeout(function () {
      mole2id.src = "img/hill.png";
    }, 500);
  } else if (chanceHole == 3) {
    mole3id.src = "img/mole.png";
    mole3id.addEventListener("click", () => {
      score = score + 1; // Score is also just multiplying exponentially???? Maybe because of setInterval
      scoreText.textContent = score;
    });
    setTimeout(function () {
      mole3id.src = "img/hill.png";
    }, 500);
  } else if (chanceHole == 4) {
    mole4id.src = "img/mole.png";
    mole4id.addEventListener("click", () => {
      score = score + 1; // Score is also just multiplying exponentially???? Maybe because of setInterval
      scoreText.textContent = score;
    });
    setTimeout(function () {
      mole4id.src = "img/hill.png";
    }, 500);
  } else if (chanceHole == 5) {
    mole5id.src = "img/mole.png";
    mole5id.addEventListener("click", () => {
      score = score + 1; // Score is also just multiplying exponentially???? Maybe because of setInterval
      scoreText.textContent = score;
    });
    setTimeout(function () {
      mole5id.src = "img/hill.png";
    }, 500);
  } else if (chanceHole == 6) {
    mole6id.src = "img/mole.png";
    mole6id.addEventListener("click", () => {
      score = score + 1; // Score is also just multiplying exponentially???? Maybe because of setInterval
      scoreText.textContent = score;
    });
    setTimeout(function () {
      mole6id.src = "img/hill.png";
    }, 500);
  }
  return;
};