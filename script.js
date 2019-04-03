//script.js
let gameSpace = document.querySelector(".gamespace")
let timeLeft = document.querySelector("#timeleft")
let score = document.querySelector("#score")
let makeDot = document.createElement("div")
let interval = 2000;
let button = document.getElementsByClassName("button")
let startModal = document.querySelector(".modal-start")
let endModal = document.querySelector(".modal-end")
let playButton = document.getElementById("playbutton")
let playAgainButton = document.getElementById("playagain")
let finalScore = document.getElementById("finalscore") 
let currentIntId;
let dot = document.querySelector(".dot")
function createDot() {
	gameSpace.appendChild(makeDot)
	makeDot.classList.add("dot")
}

function respawnDot() {
	let dot = document.querySelector(".dot")
	dot.style.left = `${Math.floor(Math.random() * gameSpace.clientWidth)}px`
	dot.style.top = `${Math.floor(Math.random() * gameSpace.clientHeight)}px`
}
function addScore() {
	let dot = document.querySelector(".dot")
	score.innerHTML = 0
	gameSpace.addEventListener('click', function(e) {
		if (e.target == dot) {
			dot.style.left = `${Math.floor(Math.random() * gameSpace.clientWidth)}px`
			dot.style.top = `${Math.floor(Math.random() * gameSpace.clientHeight)}px`
			score.innerHTML = 1 + parseInt(score.innerHTML)
			clearInterval(currentIntId)
			if(timeLeft.innerHTML>0 && interval>300) {
			currentIntId = setInterval(respawnDot, (interval))
			interval = interval * .96
			console.log("hit", interval)

			} else {
				setInterval(respawnDot, 300)
			}
		} else {
			clearInterval(currentIntId)
			if(timeLeft.innerHTML>0 && interval>300) {
			currentIntId = setInterval(respawnDot, (interval))
			interval = interval * .96
			console.log("missed", interval)
			} else {
				setInterval(respawnDot, 300)
			}
			subtractScore()
		}
	})
}

function timer() {
	timeLeft.innerHTML = 30;
	let time = setInterval(function() {
		timeLeft.innerHTML -= 1
		if (timeLeft.innerHTML == 0) {
			clearInterval(time)
			showEndModal()
		}
	}, 1000)
}

function subtractScore() {
	score.innerHTML = score.innerHTML - .5
}

function easyDifficulty() {
	let dot = document.querySelector(".dot")
	dot.style.width = '50px'
	dot.style.height = '50px'
}
function normalDifficulty() {
	let dot = document.querySelector(".dot")
	dot.style.width = '30px'
	dot.style.height = '30px'
}
function hardDifficulty() {
	let dot = document.querySelector(".dot")
	dot.style.width = '15px'
	dot.style.height = '15px'
}
function extremeDifficulty() {
	let dot = document.querySelector(".dot")
	dot.style.width = '15px'
	dot.style.height = '15px'
}

function consolelog() {
	console.log("YAYYY")
}
function setDifficulty() {
	document.getElementById('easybutton').addEventListener('click', easyDifficulty)
	document.getElementById('normalbutton').addEventListener('click', normalDifficulty)
	document.getElementById('hardbutton').addEventListener('click', hardDifficulty)
	document.getElementById('extremebutton').addEventListener('click', extremeDifficulty)
}
// const decrementTimeout = () => {
// 	console.log(interval)
// 	if (timeLeft.innerHTML>0 && interval>300) {
// 		let decrement = setTimeout(respawnDot, function() {
// 			console.log(interval)
// 			clearTimeout(decrement)
// 			interval = .95 * interval
// 			return interval;
// 			})
// 	} else {
// 		return interval;
// 		}
// }
// function dotDisappear() {
// 	if (timeLeft.innerHTML > 0) {
// 		let dotSpawn = setInterval(respawnDot, decrementTimeout())
// 	}  else {
// 		clearInterval(dotSpawn)
// 	}
// }

function showStartModal() {
	if (startModal.style.display === "block") {
		startModal.style.display = "none"
		playGame()
	} else {
		playGame()
		startModal.style.display = "none"
	}
}
function showEndModal() {
	if (timeLeft.innerHTML == 0) {
		if (endModal.style.display == "none") {
			location.reload()
			endScore()
		} else {
			endModal.style.display = "block"
			endScore()
		}
	}
}
function endScore() {
	console.log(score)
	finalScore.innerText = score.innerText
}
function reloadPage() {
	location.reload()
}
playButton.addEventListener("click", showStartModal)
playAgainButton.addEventListener("click", reloadPage)

createDot()
document.addEventListener("DOMContentLoaded", setDifficulty)
function playGame() {
	timer()
	addScore()
}

// let play = window.setTimeout(playGame(), 3000)
// window.clearTimeout(play)
