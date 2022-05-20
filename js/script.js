window.onload = function() {

//Llamamos o instanciamos las calses que vamos a utilizar
    const bg = new Background(canvas.width, canvas.height);
    const ship = new Ship(100, 300, 100, 100);
    // const obstacle = new Obstacle();
    // const obstacle = new Obstacle(100, 100, 50, 50);

    // creamos la variable container que contiene nuestra portada para poder esconderla
    const container = document.getElementById('container');
    
   
    
// Iniciamos el juego presionando el boton start y ocultamos la portada
    document.getElementById("start-button").onclick = function() {
        if(!requestId) {
        startGame();
        container.style.display = "none";
        }

    };
// Iniciamos el juego
    
    function startGame() {
        requestId = requestAnimationFrame(updateGame);
    }
//Cuando se termine la vida
    function gameOver() {
        requestId = undefined
    }
    function resetGame() {}


    function winGame() {}

    function updateGame() {
         frames++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ship.update();
        
        bg.draw();
        ship.draw();
        spawnAsteroids();
        spliceObstacles();
        asteroids.forEach((asteroid, index_asteroid)=> {
                asteroid.update();
                
                projectiles.forEach((projectile, index_projectile)=> {
                    projectile.update();
                    if(projectile.collision(asteroid)) {
                        projectiles.splice(index_projectile, 1);
                        asteroids.splice(index_asteroid, 1);
                        // points++;
                    }
                })
                if(ship.collision(asteroid)) {
                    gameOver();

                }

            });
        if(requestId){
            requestId = requestAnimationFrame(updateGame);
        }
        if(keys.ArrowUp.pressed) {
            ship.vy = -20;
        }else if(keys.ArrowDown.pressed){
            ship.vy = 20;
        }else{
            ship.vy = 0;
        }
        if(keys.ArrowLeft.pressed){
            ship.vx = -200;
        }else if(keys.ArrowRight.pressed){
            ship.vx = 100;
        }else{
            ship.vx = 0;
        }   

    }

    function shoot() {}

    function exploid() {}

    function disapear() {}

    function changeBackground() {}

    // creamos un array para los obstáculos
    const obstacles = []
     const asteroids = []
    // creamos una funcion para crear los enemigos
    function spawnAsteroids() {
        if(frames % 160 === 0) {
        //game over
        //recortes
        //win
        //pintar el score 
            const image = obstaclesImg[Math.floor(Math.random() * obstaclesImg.length)];

            const radius = Math.random() * 30;
            let x
            let y
            if (Math.random() < 0.5) {
                x = Math.random() < 0.5 ?  0 - radius : canvas.width + radius;
                y = Math.random() * canvas.height;
            } else {
                x = Math.random() * canvas.width;
                y = Math.random() < 0.5 ?  0 - radius : canvas.height + radius;
            }
            const color = 'slategrey';
            // this.image = new Image();
            // this.image.src = 'imgages/asteroids/ast2.png';
            const angle  = Math.atan2(
                canvas.height / 2 -y,
                canvas.width / 2 -x
            )
            const velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            }
                asteroids.push(new Asteroid( x,y,radius,color, velocity, image))
                console.log(asteroids);
            
        }

    }
    function spliceObstacles(index) {
        if(asteroids.length > 5) {
            asteroids.forEach((asteroid, index) => {
                asteroids.splice(asteroid);
            })
    
        }
    }
   
    // const player = new Player();
    
    // Creamos una constante para los proyectiles
    const projectiles = [new Projectile({
        position: {
            x: ship.x + ship.width / 2 +20,
            y: ship.y + ship.height / 2 -20
        },
        velocity : {
            x: 10,
            y: 0
        }
       
    })];

   //creamos una constante pare las teclas de movimiento que no siga moviendose una vez dejadas de presionar
        const keys = {
            ArrowUp: {
                pressed: false,
            },
            ArrowDown: {
                pressed: false,
            },
            ArrowLeft: {
                pressed: false,
            },
            ArrowRight: {
                pressed: false,
            },
        }                                
    
    addEventListener('keydown', ({key}) => {
        switch (key) {
            case 'ArrowUp':
                ship.vy = -20;
                keys.ArrowUp.pressed = true;
                break;
            case 'ArrowDown':
                ship.vy = 20;
                keys.ArrowDown.pressed = true;
                break;
            case 'ArrowLeft':
                ship.vx = -100;
                keys.ArrowLeft.pressed = true;
                break;
            case 'ArrowRight':
                ship.vx = 100;
                keys.ArrowRight.pressed = true;
                break;
            case ' ':
                projectiles.push(new Projectile({
                    position: {
                        x: ship.x + ship.width / 2 +20,
                        y: ship.y + ship.height / 2 -20
                    },
                    velocity : {
                        x: 10,
                        y: 0
                    }
                }));
                break;
        
        };
    });
    addEventListener('keydown', ({key}) => {
        switch (key) {
            case 'ArrowUp':
                ship.vy = -20;
                keys.ArrowUp.pressed = false;
                break;
            case 'ArrowDown':
                ship.vy = 20;
                keys.ArrowDown.pressed = false;
                break;
            case 'ArrowLeft':
                ship.vx = -100;
                keys.ArrowLeft.pressed = false;
                break;
            case 'ArrowRight':
                ship.vx = 100;
                keys.ArrowRight.pressed = false;
                break;
        
        };
    });

    addEventListener("keydown", (e)=>{
        e.preventDefault();
        if(e.keyCode === 40) {
            ship.y += 80;
        }
    });
    addEventListener("keyup", (e)=>{
        e.preventDefault();
        if(e.keyCode === 38) {
            ship.y -= 100;
        }
    });
    addEventListener("keyleft", (e)=>{
        e.preventDefault();
    });
    addEventListener("keyright", (e)=>{
        e.preventDefault();
    });

}