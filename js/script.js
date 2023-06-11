// variable declaration

let cvs = document.getElementById('canvas').getContext("2d")
let snakePostionX = 80;
let snakePostionY = 80;
let nPostx = 0
let nPosy = 0
let fPosx = 140;
let fPosy = 140;
let snakeTail = []
let snakeSize = 1
let score = 0
let gameStatus = 'get ready'

// onload window function

window.onload = ()=>{
    document.addEventListener('keydown', inputControl)
     game = setInterval(mainGame,200)

}

// main game function

function mainGame() {
    document.getElementById('score').innerHTML = score
    document.getElementById('game-status').innerHTML = gameStatus

    // move snake

    snakePostionX += nPostx
    snakePostionY += nPosy

    // control snake movement

    if (snakePostionX > 400) {
        snakePostionX = 0
    }else if (snakePostionY > 400) {
        snakePostionY = 0
    }else if (snakePostionX < 0) {
        snakePostionX = 400
    }else if (snakePostionY < 0) {
        snakePostionY = 400
    }
    // game area
    
    // canvas background color

    cvs.fillStyle = "black"
    cvs.fillRect(0,0,400,400)

    // grid line

    for (cl=0;cl<400;cl += 20) {
        cvs.moveTo(cl,0)
        cvs.lineTo(cl, 400)
    }

    for (rl=0;rl<400;rl += 20) {
        cvs.moveTo(0,rl)
        cvs.lineTo(400, rl)
    }

    cvs.strokeStyle = 'grey'
    cvs.stroke()

    // fruit

    cvs.fillStyle = "red"
    cvs.fillRect(fPosx,fPosy,20,20)

    // snake

    cvs.fillStyle = "yellow"
    // cvs.fillRect(snakePostionX,snakePostionY,20,20)
    for (let i = 0; i < snakeTail.length; i++) {
        cvs.fillRect(
            snakeTail[i].x,
            snakeTail[i].y,
            20,
            20
        )

        if (snakePostionX == snakeTail[i].x && snakePostionY == snakeTail[i].y && snakeSize > 1) {
            clearInterval(game)
            gameStatus = 'ended'
            document.getElementById('game-status').innerHTML = gameStatus
        }
        
    }

    // if snake eat food

    if(snakePostionX == fPosx && snakePostionY == fPosy) {
        score+=10
        snakeSize++;
        fPosx = Math.floor(Math.random()*20)*20;
        fPosy = Math.floor(Math.random()*20)*20;
    }

    snakeTail.push({
        x:snakePostionX,
        y:snakePostionY
    })

    while(snakeTail.length>snakeSize) {
        snakeTail.shift();
    }
    

}

// input controll function

function inputControl(e) {

    switch (e.keyCode) {
        case 38:
            // UP
            nPosy -= 20
            nPostx = 0
            break;
        case 40:
            // Down
            nPosy += 20
            nPostx = 0
            break
        case 39:
            // right
            nPostx += 20
            nPosy=0
            break
        case 37:
            // left
            nPostx -= 20
            nPosy=0
            break

    }

    if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
        gameStatus = 'started'
        document.getElementById('game-status').innerHTML = gameStatus
    }
}