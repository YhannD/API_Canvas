export class Dessin {
    constructor(canvas) {
        this.draw = false
        this.prevX = 0
        this.prevY = 0
        this.canvas = document.querySelector(canvas)
        this.ctx = this.canvas.getContext("2d")
        this.ctx.strokeStyle = "black"
        this.ctx.lineWidth = 2
        this.ctx.lineJoin = "round"
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(0, 0, 600, 600)
        this.loadCanvas();

        this.canvas.addEventListener("mousedown", (e) => {
            // Je dessine
            this.draw = true

            //je stocke les coordonnées de départ
            this.prevX = (e.clientX - this.canvas.offsetLeft) * 600 / this.canvas.clientWidth
            this.prevY = (e.clientY - this.canvas.offsetTop) * 600 / this.canvas.clientHeight
        })

        this.canvas.addEventListener("mousemove", (e) => {
            if (this.draw) {
                // On calcule les coordonnées
                let currX = (e.clientX - this.canvas.offsetLeft) * 600 / this.canvas.clientWidth
                let currY = (e.clientY - this.canvas.offsetTop) * 600 / this.canvas.clientHeight

                // On dessine
                this.dessine(this.prevX, this.prevY, currX, currY)

                // On stocke els nouvelles coordonnées
                this.prevX = currX
                this.prevY = currY
            }
        })

        this.canvas.addEventListener("mouseup", () => {
            this.draw = false
        })
        this.canvas.addEventListener("mouseout", () => {
            this.draw = false
        })
    }

    dessine(depX, depY, destX, destY) {
        this.ctx.beginPath()
        this.ctx.moveTo(depX, depY)
        this.ctx.lineTo(destX, destY)
        this.ctx.closePath()
        this.ctx.stroke()
        this.saveCanvas()
    }

    setColor(color) {
        this.ctx.strokeStyle = color
    }
    colorPicker(value) {
        // this.ctx.strokeStyle = color
        // if(color.target.id === 'stroke') {
        //     this.ctx.strokeStyle = color.target.value;
        this.ctx.strokeStyle = value
    }

    normalStroke() {
        this.ctx.lineWidth = 2
    }    
    mediumStroke() {
        this.ctx.lineWidth = 8
    }    
    largeStroke() {
        this.ctx.lineWidth = 20
    }    
    biggerStroke() {
        this.ctx.lineWidth++
    }

    smallerStroke() {
        this.ctx.lineWidth = (this.ctx.lineWidth > 1) ? this.ctx.lineWidth - 1 : 1
    }

    erase() {
        localStorage.setItem("myCanvas", null)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    //Enregistre l'image
    generateImage(){
        return this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    }
    //Enregistre l'image dans le localStorage
    saveCanvas() {
        localStorage.setItem("myCanvas", this.canvas.toDataURL());
    }
    //Charge l'image depuis le localStorage
    loadCanvas() {
        const dataURL = localStorage.getItem("myCanvas");
        if(dataURL !== 'null' && dataURL !== null){
        const img = new Image();

        img.src = dataURL;
        img.onload = () =>{
            this.ctx.drawImage(img, 0, 0);
        };
        }
    }
    // clearCanvas() {
    //     localStorage.removeItem("myCanvas");
    // }
}