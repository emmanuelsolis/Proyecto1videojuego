window.onload = function() {

    const bg = new Background(canvas.width, canvas.height);
    const ship = new Ship(100, 100, 50, 50);
    // const obstacle = new Obstacle(100, 100, 50, 50);
    const container = document.getElementById('container');


    document.getElementById("start-button").onclick = function() {
        if(!requestId) {
        startGame();
        container.style.display = "none";
        }

    };

    function startGame() {
        requestId = requestAnimationFrame(updateGame);
    }

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
        if(requestId){
            requestId = requestAnimationFrame(updateGame);
        }

    }

    function shoot() {}

    function exploid() {}

    function disapear() {}

    function changeBackground() {}

    function generateObstacles() {}

    function drawObstacles() {}

}