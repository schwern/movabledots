var MovableClass = "movable";

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function moveDot() {
    this.style.top  = getRandomBetween(0, 100) + '%';
    this.style.left = getRandomBetween(0, 100) + '%';
    this.style.transform = 'translate(-50%, -50%)';
}

function init() {
    var movableNodes = document.getElementsByClassName(MovableClass);
    for( i = 0; i < movableNodes.length; i++ ) {
        var node = movableNodes[i];
        node.onclick = moveDot;
    }
}

document.addEventListener("DOMContentLoaded", init);