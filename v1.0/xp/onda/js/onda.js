const xp = new Experience(8, "#daa5e2")
let canvasContainer = document.querySelector("div.canvas-container")
let inputs = document.querySelectorAll("div.input-group")
let inputnumbers = document.querySelectorAll("div.input-group input")

for (let i = 0; i < inputs.length; i++) {
    let buttons = inputs[i].querySelectorAll("button")
    buttons[0].addEventListener("click", ()=> {
        if(parseInt(inputs[i].querySelector("input").value) > 1){
            inputs[i].querySelector("input").value = parseInt(inputs[i].querySelector("input").value) - 1
            y.amplitude -= 5
        }
    })
    buttons[1].addEventListener("click", ()=> {
        inputs[i].querySelector("input").value = parseInt(inputs[i].querySelector("input").value) + 1
        y.amplitude += 5
    })
}

function setup(){
    let canvas = createCanvas(200, 200)
    canvas.elt.style.width = "100%"
    canvas.elt.style.height = "50%"
    canvasContainer.appendChild(canvas.elt)
    strokeWeight(4)
    stroke(255)
    noFill()
    strokeWeight(2)
    line(0, height/2, width, height/2)
    x = new Wave(60, 2, 200, color("#ffffff"))
    y = new Wave(60, 2, 200, color("#185e82"))
    x.soundWave.volume = 0
    x.show()
    y.show()
}

function draw(){
    clear()
    x.show()
    stroke(255)
    line(0, height/2, width, height/2)
    y.update(inputnumbers[0].value)
}

class Wave{
    constructor(amp, freq, lambda, color){
        this.amplitude = amp
        this.color = color
        this.lambda = lambda
        this.soundWave
        this.sound()
    }

    show(){
        let initialPoint = 0

        while(initialPoint < width){
            stroke(this.color)

            bezier(initialPoint, height/2, initialPoint + this.lambda/4, height/2 + this.amplitude, initialPoint +  this.lambda/4, height/2 + this.amplitude, initialPoint + this.lambda/2, height/2)  
            
            bezier(initialPoint + this.lambda/2, height/2, initialPoint + this.lambda/2 + this.lambda/4, height/2 - this.amplitude, initialPoint + this.lambda/2 + this.lambda/4, height/2 - this.amplitude, initialPoint + this.lambda, height/2)
            
            initialPoint += this.lambda
        }
    }

    sound(){
        this.soundWave = new Pizzicato.Sound({ 
            source: 'wave', 
            options: {
                frequency: this.lambda
            }
        });
        
        this.soundWave.play();
    }

    updateSound(){
        this.soundWave.frequency = this.frequency
        this.soundWave.volume = this.amplitude/120
    }

    update(lambda){
        this.lambda = 200/lambda
        this.frequency = lambda * 100
        this.show()
        this.updateSound()
    }
}













// const div3 = document.querySelector("div.carousel2")
// div3.addEventListener("input", ev=>{
    
//     wavesurfer = WaveSurfer.create({
//         container: '#waveform',
//         waveColor: 'violet',
//         progressColor: 'purple',
//         barHeight: "5",
//         height: "500",
//         barWidht: "6"
//     })

//     wavesurfer.load('wave2.mp3')

//     wavesurfer.on('ready', function () {
//         wavesurfer.play();
//     })
// })