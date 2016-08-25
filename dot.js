var MovableClass = "movable";

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function moveDot() {
    this.style.top  = getRandomBetween(0, window.innerHeight - this.clientHeight);
    this.style.left = getRandomBetween(0, window.innerWidth  - this.clientWidth);
}

function init() {
    var movableNodes = document.getElementsByClassName(MovableClass);
    for( i = 0; i < movableNodes.length; i++ ) {
        var node = movableNodes[i];
        node.onclick = moveDot;
    }
}

document.addEventListener("DOMContentLoaded", init);
