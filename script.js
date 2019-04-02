//script.js
//
let gameSpace = document.querySelector(".gamespace")
let timeLeft = document.querySelector("#timeleft")
let score = document.querySelector("#score")
let makeDot = document.createElement("div")
let interval = 2000;
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
	dot.addEventListener('click', function(){
		dot.style.left = `${Math.floor(Math.random() * gameSpace.clientWidth)}px`
		dot.style.top = `${Math.floor(Math.random() * gameSpace.clientHeight)}px`
		score.innerHTML = ++score.innerHTML
	})
	// gameSpace.addEventListener('click', )
}

function timer() {
	timeLeft.innerHTML = 30;
	let time = setInterval(function() {
		timeLeft.innerHTML -= 1
		if (timeLeft.innerHTML == 0) {
			clearInterval(time)
			alert("Finished!")
			// alert("Finished!")
		}

	}, 100)
}


function easyDifficulty() {
	dot.style.width = '30px'
	dot.style.height = '30px'
}
function normalDifficulty() {
	dot.style.width = '20px'
	dot.style.height = '20px'
}
function hardDifficulty() {
	dot.style.width = '15px'
	dot.style.height = '15px'
}
function extremeDifficulty() {
	dot.style.width = '15px'
	dot.style.height = '15px'
}
function setDifficulty() {
	button[0].addEventListener('click', easyDifficulty)
	button[1].addEventListener('click', normalDifficulty)
	button[2].addEventListener('click', hardDifficulty)
	button[3].addEventListener('click', extremeDifficulty)
}
// let timeLeft = 10
// var downloadTimer = setInterval(function(){
//   document.getElementById("timeleft").innerHTML = timeLeft + " seconds remaining";
//   timeLeft -= 1;
//   if(timeLeft < 0){
//     clearInterval(downloadTimer);
//     document.getElementById("timeleft").innerHTML = "Finished"
//   }
// }, 1000);

function playGame() {
createDot()
respawnDot()
setDifficulty()
addScore()
timer()
}
playGame()
// let play = window.setTimeout(playGame(), 3000)
// window.clearTimeout(play)
