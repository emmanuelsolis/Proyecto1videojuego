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
        bg.draw();
        ship.draw();
        generateObstacles();
        drawObstacles();
        if(requestId){
            requestId = requestAnimationFrame(updateGame);
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
   
    


    addEventListener("keydown", (e)=>{
        e.preventDefault();
        if(e.keyCode === 40) {
            ship.y += 20;
        }
    });
    addEventListener("keyup", (e)=>{
        e.preventDefault();
        if(e.keyCode === 38) {
            ship.y -= 80;
        }
    });
    addEventListener("keyleft", (e)=>{
        e.preventDefault();
        if(e.keyCode === 37) {
            this.x -= 80;
        }
    });
    addEventListener("keyright", (e)=>{
        e.preventDefault();
        if(e.keyCode === 39) {
            this.x *= 2;
        }
    });
}