"use strict";

let MovableClass = "movable";

function getRandomBetween(min, max) {
    if( min > max ) {
        throw TypeError("min > max");
    }
    return Math.floor(Math.random() * (max-min)) + min;
}

function moveDot() {
    this.style.top  = getRandomBetween(0, window.innerHeight - this.clientHeight);
    this.style.left = getRandomBetween(0, window.innerWidth  - this.clientWidth);
}

function init() {
    let movableNodes = document.getElementsByClassName(MovableClass);
    for( let i = 0; i < movableNodes.length; i++ ) {
        let node = movableNodes[i];
        node.onclick = moveDot;
    }
}

document.addEventListener("DOMContentLoaded", init);
