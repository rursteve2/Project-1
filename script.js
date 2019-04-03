//script.js
//
let gameSpace = document.querySelector(".gamespace")
let timeLeft = document.querySelector("#timeleft")
let score = document.querySelector("#score")
let makeDot = document.createElement("div")
let interval = 1000;
let button = document.getElementsByClassName("button")
let startModal = document.querySelector(".modal-start")
let endModal = document.querySelector(".modal-end")
let playButton = document.getElementById("playbutton")
let playAgainButton = document.getElementById("playagain")
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
			decrementTimeout()
		} else {
			subtractScore()
			decrementTimeout()
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
function setDifficulty() {
	document.getElementById('easybutton').addEventListener('click', easyDifficulty)
	document.getElementById('normalbutton').addEventListener('click', normalDifficulty)
	document.getElementById('hardbutton').addEventListener('click', hardDifficulty)
	document.getElementById('extremebutton').addEventListener('click', extremeDifficulty)
}
var decrementTimeout = () => {
	if (timeLeft.innerHTML > 0 && interval > 300) {
		let decrement = setTimeout(respawnDot, function() {
		console.log(interval)
		clearTimeout(decrement)
		interval = interval * .95
		return interval
		})
		} else {
		return interval;
		}
	}
function dotDisappear() {
	if (timeLeft.innerHTML > 0) {
		let dotSpawn = setInterval(respawnDot, decrementTimeout())
		
	}  else {
		clearInterval(dotSpawn)
	}
}

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
		} else {
			endModal.style.display = "block"
		}
	}
}
function reloadPage() {
	location.reload()
}
playButton.addEventListener("click", showStartModal)
playAgainButton.addEventListener("click", reloadPage)

function playGame() {
	timer()
	createDot()
	setDifficulty()
	// dotDisappear()
	addScore()
}

// let play = window.setTimeout(playGame(), 3000)
// window.clearTimeout(play)
