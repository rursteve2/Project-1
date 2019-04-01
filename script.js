//script.js
//
let gameSpace = document.querySelector(".gamespace")
let timeLeft = document.querySelector("#timeleft")
let score = document.querySelector("#score")
let makeDot = document.createElement("div")
let dot = document.querySelector(".dot")
let interval = 2000;
function createDot() {
	gameSpace.appendChild(makeDot)
	makeDot.classList.add("dot")
}
function respawnDot() {
	dot.style.left = (Math.random() * gameSpace.innerWidth) + 'px'
	dot.style.top = (Math.random() * gameSpace.innerHeight) + 'px'
}
function addScore() {
	dot.addEventListener('click', function(){
		score += 1
	})
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
addScore()
timer()
}
playGame()