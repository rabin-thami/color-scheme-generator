let leftScore = 0;
let rightScore = 0;

let savedScore = document.getElementById('savedScore');
let leftDisplyScore = document.getElementById('leftScore');
let rightDisplyScore = document.getElementById('rightScore');

function add1Left() {
    leftScore += 1;
    leftDisplyScore.textContent = leftScore;
}

function add2Left() {
    leftScore += 2;
    leftDisplyScore.textContent = leftScore;
}

function add3Left() {
    leftScore += 3;
    leftDisplyScore.textContent = leftScore;
}

function add1Right() {
    rightScore += 1;
    rightDisplyScore.textContent = rightScore;
}

function add2Right() {
    rightScore += 2;
    rightDisplyScore.textContent = rightScore;
}

function add3Right() {
    rightScore += 3;
    rightDisplyScore.textContent = rightScore;
}


function saveAndReset () {
    let lastScore = leftScore + ' : ' +  rightScore;
    savedScore.textContent = lastScore;
    leftScore = 0
    rightScore = 0
    leftDisplyScore.textContent = leftScore;
    rightDisplyScore.textContent = rightScore;

}