class Background {
    constructor(width, height) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = "images/milkyway.png";
    }

    draw() {
    
        if(this.x < -canvas.width){
            this.x = 0;
        }
        this.x--

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + canvas.width, this.y, this.width, this.height);
    }
    // gameOver(ctx) {

    // }
}

class Ship {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = "images/ships/ship.png";
        this.vy = 0;
        this.userPull = 0;
    }
    //methods 
    draw() {
        //gravedad
        this.vy = this.vy + (gravity - this.userPull);

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    collision(obstacle, Ship) {
        return (
            this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y
        )
    }
}

// class Obstacle  extends Ship {
//     constructor(, x,y, h) {
//         super(x, y, width,h);
//         this.vy = 1;
//     }
//     draw() {
//         ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
//     }
// }


