// creamos el lienzo y el contexto
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

let frames = 0;
const gravity = 0;

//almacenamos nuestras imágenes en arreglos
const obstaclesImg = ["images/Recurso1.png", "/images/Recurso3.png", "/images/Recurso4.png", "/images/Recurso5.png", "images/Recurso7.png", "/images/Recurso8.png", "/images/movingcraft.gif", "/images/ufo.png"];
const SpaceShipImg = ["../images/ships/movingcraft.gif", "../images/ships/spacecraft.jpg", "../images/ships/ship7.png"];
let points = 0;
let health = 100;
let = won = new Image();
won.src = "http://perplexingtech.weebly.com/uploads/1/3/5/8/13586676/2367811_orig.png";
const obstacles = []
// const newObstacle = [];
let dificulty = 1;
let requestId;
//Recursos para el game over
const dead = new Image();
dead.src = "http://www.crookedtreehouse.com/uploads/3/8/3/6/3836619/5136914_orig.jpeg";
//El audio para nuestro juego
const audio = new Audio();
audio.src = "/audio/Race to Mars.mp3"
//para que siempre corra el audio
audio.loop = true;

let spacecraft1 = {
    x: 100,
    y: 100,
}
