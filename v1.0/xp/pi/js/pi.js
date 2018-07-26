var container = document.querySelector('div.canvas')
var range = document.querySelector('input.range')
var button = document.querySelector('button')
var pause = document.querySelector('div.pause')
var play = document.querySelector('div.play')
var undo = document.querySelector('div.undo')
var progress = document.querySelector('div.progressbar-inside')
var perc = 0;
var xp = new Experience(6, "f4c242")
button.addEventListener('click', ev=> {
    window.location = '../../xplist.html'
})

function setup() {

    progress.style.width = (range.value/4).toString() + '%'

    w = displayHeight * 0.5;
    x = createCanvas(w,w)
    x.elt.style.background = 'transparent'
    container.appendChild(x.elt)
    
    // Draws ellipse
    stroke("#f4c242")
    translate(width/2, height/2)
    noFill()
    strokeWeight(2)
    ellipse(0,0,w,w)

    // Draws PI
    fill('#f4c242')
    textSize(100)
    textAlign(CENTER, CENTER);
    text('π', 0, 0)

    //Lock framerate
    frameRate(0)

    //Digitos de pi em String
    pi = returnPi();
    piDigits = pi.split('');
    for (var i = 0; i < piDigits.length ; i++) {
        piDigits[i] = parseInt(piDigits[i])
    }
    
    // indice atual
    index = 0;
    range.value = 0
}   

//Play button event
play.addEventListener('click', function playSketch(){
    play.style.color = '#34cd6f'
    pause.style.color = 'white'
    frameRate(15)
})

//Pause button event
pause.addEventListener('click', function pauseSketch(){
    pause.style.color = '#34cd6f'
    play.style.color = 'white'
    frameRate(0)
})

//Reset button event
undo.addEventListener('click', resetSketch)

//Resets the sketch and redefines all values
function resetSketch(){
    translate(-width/2, -height/2)
    clear();
    translate(width/2, height/2)
    index = 0;
    range.value = 0
    stroke("#f4c242")
    noFill()
    strokeWeight(2)
    ellipse(0,0,w,w, 5)
}


function draw() {
    background('rgba(100%, 100%, 100%, 0)')
    range.value = parseInt(range.value) + 2;
    index = parseInt(range.value);
    translate(width/2, height/2)
    digit = piDigits[index]
    nextDigit = piDigits[index+1]
    
    a1 = map(digit, 0, 10, 0, TWO_PI)
    a2 = map(nextDigit, 0, 10, 0, TWO_PI)
    
    x1 = w/2 * cos(a1) - random(TWO_PI/10, 1)
    y1 = w/2 * sin(a1) - random(TWO_PI/10, 1)

    x2 = w/2 * cos(a2) - random(TWO_PI/10, 1)
    y2 = w/2 * sin(a2) - random(TWO_PI/10, 1)

    strokeWeight(2)
    stroke('#ffffff')
    line(x1, y1, x2, y2)

    progress.style.width = (range.value/4).toString() + '%'

    if(range.value > 396){
        resetSketch();
        range.value = 0;
    }
}
