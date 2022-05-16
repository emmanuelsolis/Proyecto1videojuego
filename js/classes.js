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
        this.x -= 3;

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
        this.img.src = "images/ships/movingcraft.gif";
        this.vy = 0;
        this.vx = 1;
        this.speed = 0;            
    }
    //methods 
    draw() {
        this.x = this.x + this.vx;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
    constructor(image, x, y, h) {
        super(x, y, 100,h);
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src =  obstacles;
        this.width = 100;
        this.height = h;
        this.vy = 0;
        this.vx = 1;}
    draw() {
        if(!(frames % 60 === 0)){
            return true
        }   
        for(const element of obstaclesImg) {
            setInterval(() => {
                this.image.src = obstacles[element];
            }, 20000);
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}
