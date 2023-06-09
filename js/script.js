// variable declaration

let cvs = document.getElementById('canvas').getContext("2d")

// onload window function

window.onload = ()=>{
    mainGame()
}

// main game function

function mainGame() {

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

}

// input controll function
