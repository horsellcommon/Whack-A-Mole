const newGame = document.getElementById("newgame");
const whackButton = document.getElementById("whack-button");
const molePics = document.getElementsByClassName("chancemole");

newGame.addEventListener("click", () => {
    moleFunc()
    window.setInterval(moleFunc, 3000)
});

const moleFunc = () => {
    let chanceHole = Math.round(Math.random() * 6);
  if (chanceHole == 0 || chanceHole == 1) {
    document.getElementById("mole1").src = "img/mole.png";
    setTimeout(function () {
      document.getElementById("mole1").src = "img/hill.png";
    }, 1000);
  } else if (chanceHole == 2) {
    document.getElementById("mole2").src = "img/mole.png";
    setTimeout(function () {
      document.getElementById("mole2").src = "img/hill.png";
    }, 1000);
  } else if (chanceHole == 3) {
    document.getElementById("mole3").src = "img/mole.png";
    setTimeout(function () {
      document.getElementById("mole3").src = "img/hill.png";
    }, 1000);
  } else if (chanceHole == 4) {
    document.getElementById("mole4").src = "img/mole.png";
    setTimeout(function () {
      document.getElementById("mole4").src = "img/hill.png";
    }, 1000);
  } else if (chanceHole == 5) {
    document.getElementById("mole5").src = "img/mole.png";
    setTimeout(function () {
      document.getElementById("mole5").src = "img/hill.png";
    }, 1000);
  } else if (chanceHole == 6) {
    document.getElementById("mole6").src = "img/mole.png";
    setTimeout(function () {
      document.getElementById("mole6").src = "img/hill.png";
    }, 1000);
  }
}