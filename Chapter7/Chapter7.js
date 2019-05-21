/*
document.getElementById("lefteye").style.backgroundColor = "pink";
document.getElementById("head").style.transform = "rotate(90deg)";
document.getElementById("body").style.border = "29px black solid";
document.getElementById("mouth").style.borderRadius = "5px";
document.getElementById("righteye").style.border = "4px yellowGrre dotted";
document.getElementById("leftarm").style.backgroundColor = "#ff00ff";
document.getElementById("body").style.color = "#ff0033";
document.getElementById("head").style.borderTop = "8px black solid";
*/
var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");
var rightArm = document.getElementById("rightarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rightArm.addEventListener("click", moveUpDown);


function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 1000) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 36) {
            clearInterval(id);
        }
    }

}


function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}