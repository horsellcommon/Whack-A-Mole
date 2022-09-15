const newGame = document.getElementById("newgame")
const whackButton = document.getElementById("whack-button")
const molePics = document.getElementsByClassName("chancemole")
whackButton.disabled = true
newGame.addEventListener("click", () => {
    whackButton.disabled = false
})
whackButton.addEventListener("click", () => {})