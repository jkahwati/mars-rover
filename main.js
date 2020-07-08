const Rover = require('./rover')


let rover = new Rover([0,0], "este")
// let inicial

let entrada = "MMMMMRRMMMMMM"

for (var i = 0; i < entrada.length; i++) {
    var caracter = entrada.charAt(i)
    if(caracter == "M") {
      rover.mover()
    }
    if (caracter == "L" || caracter == "R" ) {
        rover.girar(caracter)
    }

  }

  rover.getPosition();