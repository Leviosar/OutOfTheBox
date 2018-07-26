let skecth4 = (p)=>{
    const container = document.querySelector("#canvas-4")
    const width = innerWidth * 0.8
    const height = innerWidth * 0.8
    const scl = 20
    const cols = Math.floor(width/scl)
    const rows = Math.floor(height/scl)
    let startButton = container.querySelector("button.start-button")
    let snake
    let food
    let timer
    let condition = false
    p.setup = ()=>{
        p.createCanvas(width, height)
        startButton.addEventListener("click", ()=>{
            startGame()
        })
        p.frameRate(50)
        p.noLoop()
    }

    p.draw = ()=>{
        if(condition){
            p.noStroke()
            p.clear()
            food.show()
            snake2.update([food.x, food.y])
            snake2.show()
            snake.update()
            snake.show()
            if(snake.eat(food)){
                food = new Food()
                clearTimeout(timer)
                timer = setTimeout(()=>{
                    gameOver(false)
                }, 10000)
            }
            if(snake2.eat(food)){
                food = new Food()
            }
        }
    }


    function gameOver(condition){
        p.noLoop()
        startButton.style.display = "inline-block"
        if(condition){
            startButton.style.border = "4px solid #d2e459"
            startButton.style.color = "#d2e459"
        }else{
            console.log("fodeu")
            startButton.style.border = "4px solid #be3f39"
            startButton.style.color = "#be3f39"
        }
    }

    function startGame(){
        startButton.style.display = "none"
        snake = new Snake("#ffffff", false)
        snake2 = new Snake("#000000", true)
        timer = setTimeout(()=>{
            gameOver(false)
        }, 10000)
        condition = true
        food = new Food()
        p.draw()
        p.loop()
    }

    let buttons = container.querySelectorAll("button.down,button.up,button.left,button.right")
    buttons[0].addEventListener("click", ()=>{ snake.dir(0, -1)}) //UP
    buttons[1].addEventListener("click", ()=>{ snake.dir(-1, 0)}) //LEFT
    buttons[2].addEventListener("click", ()=>{ snake.dir(1, 0) }) //RIGHT
    buttons[3].addEventListener("click", ()=>{ snake.dir(0, 1) }) //DOWN

    class Snake{
        constructor(color, ai){
            this.x = width/2 - (scl/2);
            this.y = height/2 - (scl/2);
            this.xspeed = 0;
            this.yspeed = 0;
            this.total = 0;
            this.tail = [];
            this.color = color;
            this.ai = ai
        }

        update(goal){

            if(this.ai){
                if(this.x < goal[0]){
                    this.dir(1,0)
                }else if(this.x > goal[0]){
                    this.dir(-1,0)
                }
                
                if(Math.abs(this.x - goal[0]) < 4){
                    if(this.y < goal[1]){
                        this.dir(0,1)
                    }else if(this.y > goal[1]){
                        this.dir(0, -1)
                    }
                }
            }

            if(this.total === this.tail.length){
                for(let i = 0; i < this.tail.length-1; i++){
                    this.tail[i] = this.tail[i+1]
                }    
            }
            
            this.tail[this.total-1] = [this.x, this.y]

            this.x = this.x+this.xspeed*(scl/8)
            this.y = this.y+this.yspeed*(scl/8)

            this.x = p.constrain(this.x, 0, width-scl)
            this.y = p.constrain(this.y, 0, height-scl)
        }

        show(){
            p.fill(this.color)
            for (let i = 0; i < this.total; i++) {
                p.rect(this.tail[i][0], this.tail[i][1], scl , scl )
            }

            p.fill(this.color)
            p.rect(this.x, this.y, scl, scl)
        }

        dir(x, y){
            this.xspeed = x;
            this.yspeed = y;
        }

        eat(food){
            if(p.dist(this.x, this.y, food.x, food.y) < scl){
                this.total++
                if(this.ai == false && this.total > 3){
                    gameOver(true)
                }
                return true
            } 
            return false
        }
    }

    class Food{
        constructor(){
            this.x = Math.floor(p.random(cols)) * scl
            this.y = Math.floor(p.random(rows)) * scl
        }

        show(){
            p.fill("#d2e459")
            p.rect(this.x, this.y, scl, scl)
        }
    }
}

let canvas4 = new p5(skecth4, "canvas-4")
document.querySelector("#canvas-4").style.border = "2px dashed white"