let skecth1 = (p)=>{
    let width = innerWidth * 0.8
    let height = innerHeight * 0.3
    let cont = 0
    let condition = true
    p.setup = ()=>{
        p.createCanvas(width, height)
        p.frameRate(45)
    }

    p.draw = ()=>{
        p.clear()
        p.stroke(255)
        p.strokeWeight(3)
        p.noFill()
        p.ellipse(width/2 , height/2, height/1.2 + cont)

        p.stroke("#d2e459")
        p.strokeWeight(1)
        p.fill("#d2e459")
        p.textSize(30)
        p.text("A", width/2 - 8, height/2 + 5)

        if(condition)
            cont ++
        else
            cont--

        if(cont == 30) condition = false
        if(cont == 0) condition = true    
    }
}

let canvas1 = new p5(skecth1, "canvas-1")
