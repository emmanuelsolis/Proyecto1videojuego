const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
let frames = 0;
const gravity = 0.1;
const obstacles = [];
let dificulty = 1;
let requestId;
// const audio = new Audio('audio/music.mp3');
// audio.src = " "
// audio.loop = true;

let spacecraft1 = {
    x: 100,
    y: 100,
}
