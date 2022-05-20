// creamos el lienzo y el contexto
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let frames = 0;
const gravity = 0;

//almacenamos nuestras imágenes en arreglos
const obstaclesImg = ["images/Recurso1.png", "/images/Recurso3.png", "/images/Recurso4.png", "/images/Recurso5.png", "images/Recurso7.png", "/images/Recurso8.png", "/images/movingcraft.gif", "/images/ufo.png"];
const SpaceShipImg = ["../images/ships/movingcraft.gif", "../images/ships/spacecraft.jpg", "../images/ships/ship7.png"];

const obstacles = []
// const newObstacle = [];
let dificulty = 1;
let requestId;
// const audio = new Audio('audio/music.mp3');
// audio.src = " "
// audio.loop = true;

let spacecraft1 = {
    x: 100,
    y: 100,
}
