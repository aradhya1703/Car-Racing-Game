
console.log("Ready for the R A C E");

let blueCar = document.getElementById("bluecar");
let raceCar = document.getElementById("racecar");
let result = document.getElementById("result")
const score =  document.getElementById("score")
let game =  document.getElementById("game");
let counter = 0;
// let jumpsound = document.getElementById("jumpsound");



// bluecar move
blueCar.addEventListener("animationiteration", function(){
    let random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
    counter++;
})

//racecar move
window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ let raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    if(raceCarLeft < 260){raceCar.style.left = (raceCarLeft + 130) + "px"}
    // jumpsound.play()
};

    if(e.keyCode == "37"){
        let raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if(raceCarLeft > 0){raceCar.style.left = (raceCarLeft - 130) + "px"
        // jumpsound.play()
    }

    }
})


//Game over
setInterval(function Gameover (){
    let blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    let blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    let raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)