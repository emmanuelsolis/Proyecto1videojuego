//Creamos nuestro fondo
class Background {
    //propiedades
    constructor(width, height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = "images/milkyway.png";
    }
    //Métodos
    draw() {
    
        if(this.x < -canvas.width){
            this.x = 0;
        }
        this.x -= 1;

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + canvas.width, this.y, this.width, this.height);
    }
    // gameOver(ctx) { }
}
// Para nuestras naves
class Ship {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = "images/Recurso 2.png";
        this.vy = 0;
        this.vx = 0.3;
        this.speed = 0;            
    }
    //methods 

    
    draw() {
        // if(this.x > canvas.width*0.3){
        //     this.x = 0;
        // }
        // this.x += this.vx;
        
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    update() {
        if(this.img){
        this.draw()
        this.x += this.vx;
        this.y += this.vy;
        }
    }
    collision(obstacle) {
        return (
            this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y
        )
    }
}
class Projectile {
    constructor ({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.width = 200;
        this.height = 3;
        this.bullets = [];
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.x += this.velocity.x;
    }
    update () {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    collision(obstacle) {
        return (
            this.position.x < obstacle.x + obstacle.width &&
            this.position.x + this.width > obstacle.x &&
            this.position.y < obstacle.y + obstacle.height &&
            this.position.y + this.height > obstacle.y
        )
    }

}
class Asteroid {
    constructor ( x, y,radius, color, velocity, image) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.garbage = new Image();
        this.garbage.src = image;
        this.velocity = velocity;
        this.width = 100;
        this.height = 100;
    }
    //Methods
    draw() {
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.fillStyle = this.color;
        // ctx.fill();
        ctx.drawImage(this.garbage, this.x, this.y, this.width, this.height);
    }
    update () {
        this.draw();
        this.x += this.velocity.x;
        this.y +=  this.velocity.y;
    }
    
}


// Creamos nuestros enemigos

// Esta clase es para elegir entre tres diferentes naves para el inicio del juego
class SpaceShip extends Ship {
    constructor(x, y, w, h) {
        super(x, y, w, h);
            this.image1 = new Image();
            this.image1.src = arrImg[0]; 
            this.image2 = new Image();
            this.image2.src = arrImg[1];
            this.image3 = new Image();
            this.image3.src = arrImg[2];
            this.image4 = new Image();
            this.image4.src = arrImg[3];

            this.imageOfficial = this.image1

    }
}
// para los obstáculos a librar y la basura espacial
class Obstacle  extends Ship {
    constructor( x, y, h) {
        super(x, y, 100,h);
        this.velocity = {
            x: 0,
            y: 0
        }

        this.x = x;
        this.y = y;
        this.garbage = new Image();
        this.garbage.src =  "images/asteroids/ast2.jpg";
        
        }
    
    draw() {
        if(!(frames % 60 === 0)){
            return true
        }   
        
        ctx.drawImage(this.garbage, 
                        this.position.x, 
                        this.position.y, 
                        this.width, 
                        this.height);
    }
    update() {
        if(this.garbage){
        this.draw()
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        }
    }
}
