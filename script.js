//script.js
//
let gameSpace = document.querySelector(".gamespace")
let timeLeft = document.querySelector("#timeleft")
let score = document.querySelector("#score")
let makeDot = document.createElement("div")
let interval = 1000;
let button = document.getElementsByClassName("button")
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
		} else {
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
			alert("Finished!")
		}
	}, 100)
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
function dotDisappear() {
	console.log(timeLeft);
	if (timeLeft.innerText > 0) {
		let dotSpawn = setInterval(respawnDot, interval)
		
	} else {
		clearTimeout(dotSpawn)
	}
}

function playGame() {
	createDot()
	setDifficulty()
	timer()
	dotDisappear()
	addScore()

}
playGame()
// let play = window.setTimeout(playGame(), 3000)
// window.clearTimeout(play)
