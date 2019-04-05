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
let accuracyArr = []
let accuracy = document.querySelector("#accuracy")
let endingAccuracy = document.querySelector("#accuracyscore")
let counter = document.querySelector(".countdown")
let clicksound = document.querySelector("#clickpush")
let buttonsound = document.querySelector("#butpush")
let average = 0;
function createDot() {
	gameSpace.appendChild(makeDot)
	makeDot.classList.add("dot")
	let dot = document.querySelector(".dot")
	dot.style.left = `${Math.floor(Math.random() * gameSpace.clientWidth)}px`
	dot.style.top = `${Math.floor(Math.random() * gameSpace.clientHeight)}px`
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
			if(timeLeft.innerHTML>0 && interval>500) {
				interval = interval * .98
				clickpush.play()
				accuracyArr.push(parseInt("100"))
			} else {
				interval = 500
			}
		} else {
			if(timeLeft.innerHTML>0 && interval>500) {
				interval = interval * .98
				butpush.play()
				accuracyArr.push(parseInt("0"))
			} else {
				accuracyArr.push(parseInt("0"))
				interval = 500
			}
			subtractScore()
		}
		clearInterval(currentIntId)
		currentIntId = setInterval(combined, (interval))
		findAverage()
	})
}
function combined() {
	respawnDot()
	adjustAccuracy()

}
function adjustAccuracy() {
	accuracyArr.push(parseInt("0"))
	findAverage()
}
function findAverage() {
	let total = 0;
	for(let i = 0; i < accuracyArr.length; i++) {
		total = total + accuracyArr[i]
	}
	average = total / accuracyArr.length
	accuracy.innerHTML = parseInt(average)
}
function timer() {
	timeLeft.innerHTML = 60;
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
	dot.style.width = '60px'
	dot.style.height = '60px'
}
function normalDifficulty() {
	let dot = document.querySelector(".dot")
	dot.style.width = '40px'
	dot.style.height = '40px'
}
function hardDifficulty() {
	let dot = document.querySelector(".dot")
	dot.style.width = '25px'
	dot.style.height = '25px'
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

function showStartModal() {
	if (startModal.style.display === "block") {
		startModal.classList.add("startanim")
		countdown()
	} else {
		startModal.classList.add("startanim")
		countdown()
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
	finalScore.innerText = score.innerText
	endingAccuracy.innerHTML = accuracy.innerHTML
}
function reloadPage() {
	location.reload()
}
playButton.addEventListener("click", showStartModal)
playAgainButton.addEventListener("click", reloadPage)

function countdown() {
	counter.setAttribute("class", "addmodal")
	counter.innerHTML = 3;
		let time = setInterval(function() {
			counter.innerHTML -= 1
			if (counter.innerHTML == 0) {
				counter.innerHTML = "GO!"
				clearInterval(time)
				counter.setAttribute("class", "removemodal")
				setTimeout(function() {
					counter.style.display = "none"
				}, 1000)
				playGame()
			}
		}, 1500)
}

createDot()
document.addEventListener("DOMContentLoaded", setDifficulty)
function playGame() {
	timer()
	addScore()
}
