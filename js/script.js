// variable declaration

let cvs = document.getElementById('canvas').getContext("2d")
let snakePostionX = 80;
let snakePostionY = 80;
let nPostx = 0
let nPosy = 0

// onload window function

window.onload = ()=>{
    document.addEventListener('keydown', inputControl)
    setInterval(mainGame,500)

}

// main game function

function mainGame() {

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

    // snake

    cvs.fillStyle = "yellow"
    cvs.fillRect(snakePostionX,snakePostionY,20,20)

    // fruit

    cvs.fillStyle = "red"
    cvs.fillRect(120,140,20,20)
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
}