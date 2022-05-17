window.onload = function() {
//Llamamos o instanciamos las calses que vamos a utilizar
    const bg = new Background(canvas.width, canvas.height);
    const ship = new Ship(100, 300, 200, 200);
    // const obstacle = new Obstacle(100, 100, 50, 50);

    // creamos la variable container que contiene nuestra portada para poder esconderla
    const container = document.getElementById('container');
    const obstacles = [];
   
    
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
        generateObstacles();
        drawObstacles();
        projectiles.forEach(projectile => {
            projectile.update();
        });
        if(requestId){
            requestId = requestAnimationFrame(updateGame);
        }
        if(keys.ArrowUp.pressed && ship.y >= 0) {
            ship.vy = -20;
        }else if(keys.ArrowDown.pressed){
            ship.vy = 20;
        }else{
            ship.vy = 0;
        }
        if(keys.ArrowLeft.pressed){
            ship.vx = -20;
        }else if(keys.ArrowRight.pressed){
            ship.vx = 20;
        }else{
            ship.vx = 0;
        }   

    }

    function shoot() {}

    function exploid() {}

    function disapear() {}

    function changeBackground() {}

    function generateObstacles() {
        //limitamos el número de obstáculos que aparecerán en pantalla
        if ( !(frames % 160 === 0)){
            return true 
        }

        for (const element of obstaclesImg) {
            //Math.floor(Math.random() * (max - min + 1)) + min(tamaño de la altura del  gap o de la nave)
            //generamos un height random para que aparezcan en diferentes posiciones en Y
            // const height = Math.floor(Math.random() * (canvas.height * 0.6)) + ship.height;
                const posY = Math.floor(Math.random() * (canvas.height * 0.6)) + 100;
                //generamos un width random para que aparezcan en diferentes posiciones en X
                const posX = Math.floor(Math.random() * (canvas.width * 0.4)) + 100;
                let randomObstacle = new Obstacle(obstaclesImg[element],posX, posY, 200, 200);
                obstacles.push(randomObstacle);
                if(obstacles.length > 3){
                    obstacles.shift();
                }
        }
    
    }

    //Dibuja los objetos de la colleccion newObstacle
    function drawObstacles() {

        for (const element of obstacles) {
            element.draw();
        }   
    //     obstacles.forEach((obstacle, index_obstacles) => {
    //         // setInterval
    //         obstacle.draw();
    //     })
    }

    function appearObs() {

    }
    function checkCollision() {
        newObstacle.forEach((obstacle, index_obstacles) => {
            if (ship.collision(obstacle)) {
                gameOver();
            }
        })
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
        console.log(key);
        switch (key) {
            case 'ArrowUp':
                console.log("Arriba");
                ship.vy = -20;
                keys.ArrowUp.pressed = true;
                break;
            case 'ArrowDown':
                console.log("Abajo");
                ship.vy = 20;
                keys.ArrowDown.pressed = true;
                break;
            case 'ArrowLeft':
                console.log("Izquierda");
                ship.vx = -90;
                keys.ArrowLeft.pressed = true;
                break;
            case 'ArrowRight':
                console.log("Derecha");
                ship.vx = 90;
                keys.ArrowRight.pressed = true;
                break;
            case ' ':
                console.log("Disparo");
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
        console.log(key);
        switch (key) {
            case 'ArrowUp':
                console.log("Arriba");
                ship.vy = -20;
                keys.ArrowUp.pressed = false;
                break;
            case 'ArrowDown':
                console.log("Abajo");
                ship.vy = 20;
                keys.ArrowDown.pressed = false;
                break;
            case 'ArrowLeft':
                console.log("Izquierda");
                ship.vx = -20;
                keys.ArrowLeft.pressed = false;
                break;
            case 'ArrowRight':
                console.log("Derecha");
                ship.vx = 20;
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