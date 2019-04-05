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
// let dot = document.querySelector(".dot")
let accuracyArr = []
let accuracy = document.querySelector("#accuracy")
let endingAccuracy = document.querySelector("#accuracyscore")
let counter = document.querySelector(".countdown")
let clickInterval;
let clicked = true;
let clicksound = document.querySelector("#clickpush")
let buttonsound = document.querySelector("#butpush")
let total = 0;
// let arrAverage = 0;
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
				console.log("hit", interval)
				clickpush.play()
				accuracyArr.push(parseInt("100"))
				console.log("pushed")
			} else {
				interval = 500
			}
		} else {
			if(timeLeft.innerHTML>0 && interval>500) {
				interval = interval * .98
				console.log("missed", interval)
				butpush.play()
				accuracyArr.push(parseInt("0"))
				console.log("unpushed")
			} else {
				console.log('ye');
				accuracyArr.push(parseInt("0"))
				interval = 500
			}
			subtractScore()
		}
		clearInterval(currentIntId)
		currentIntId = setInterval(combined, (interval))
		clickInterval = interval
		findAverage()
	})
}
function combined() {
	respawnDot()
	adjustAccuracy()

}
function adjustAccuracy() {
	console.log(arrAverage)
}
function findAverage() {
	let total = 0;
	for(let i = 0; i < accuracyArr.length; i++) {
		total += accuracyArr[i]
	}
	let average = total / accuracyArr.length
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

function consolelog() {
	console.log("YAYYY")
}
function setDifficulty() {
	document.getElementById('easybutton').addEventListener('click', easyDifficulty)
	document.getElementById('normalbutton').addEventListener('click', normalDifficulty)
	document.getElementById('hardbutton').addEventListener('click', hardDifficulty)
	document.getElementById('extremebutton').addEventListener('click', extremeDifficulty)
}

function showStartModal() {
	if (startModal.style.display === "block") {
		// startModal.style.display = "none"
		startModal.classList.add("startanim")
		countdown()
		// playGame()
	} else {
		startModal.classList.add("startanim")
		// setTimeout(() => {
		// 	startModal.style.display = "none"
		// }, 8000)
		countdown()
		// playGame()
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
	endingAccuracy.innerHTML = accuracy.innerHTML
}
function reloadPage() {
	location.reload()
}
playButton.addEventListener("click", showStartModal)
playAgainButton.addEventListener("click", reloadPage)

function countdown() {
	counter.setAttribute("class", "addmodal")
	// counter.style.display = "block"
	counter.innerHTML = 3;
		let time = setInterval(function() {
			counter.innerHTML -= 1
			if (counter.innerHTML == 0) {
				counter.innerHTML = "GO!"
				// setTimeout(function(e) {
				clearInterval(time)
			// }, 500)
				// counter.style.display = "none"
				counter.setAttribute("class", "removemodal")
				setTimeout(function() {
					counter.style.display = "none"
				}, 1000)

				// counter.classList.add("removemodal")
				// counter.style.animation = 'roadRunnerOut 1s forwards';
				playGame()
			}
		}, 1500)
}

createDot()
document.addEventListener("DOMContentLoaded", setDifficulty)
function playGame() {
	timer()
	addScore()
	// findAverage()
}

// let play = window.setTimeout(playGame(), 3000)
// window.clearTimeout(play)
