module.exports = class Rover {

    giro = {
        "norte": {
            "L": "oeste",
            "R": "este"
        },
        "sur": {
            "L": "este",
            "R": "oeste"
        },
        "este": {
            "L": "norte",
            "R": "sur"
        },
        "oeste": {
            "L": "sur",
            "R": "norte"
        },
    }
    
    constructor(posicionInicial, cardinalInicial) {
        this.posicionInicial = posicionInicial;
        this.cardinalInicial = cardinalInicial;
    }

    mover() {

        let x = this.posicionInicial[0]
        let y = this.posicionInicial[1]
        //entrada -> ( {x: 0 , y: 1 }, norte)
        switch(this.cardinalInicial) {
            case  "norte":
                if(y > 0)
                    y--;
                else
                    y = 9;
                break;
            case  "sur":
                if(y<9)
                    y++;
                else
                    y = 0
                break;
            case  "este" :
                if(x<9)
                    x++;
                else
                    x = 0
                break;
            case  "oeste":
                if(x>0)
                    x--;
                else
                    x = 9
                break;
        }

        this.posicionInicial[0] = x;
        this.posicionInicial[1] = y;
    }

// deberia devolver la matriz donde queda parado. ejemplo [2,3]


//entrada: Norte -> salida

    girar(direcion) {
        this.cardinalInicial = this.giro[this.cardinalInicial][direcion];
        // return this.giro[this.cardinalInicial][direcion]
    }

    getPosition() {
        console.log("Estoy mirando hacia el:", this.cardinalInicial, ", y mi posicion es:", "[" + this.posicionInicial+ "]");
    }
}