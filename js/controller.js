window.onload = function() {
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



