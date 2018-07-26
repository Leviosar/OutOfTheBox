class Dub {
    constructor(container){
        this.container = container
        this.btAdd = this.container.querySelector("button.add")
        this.attachEvents()
        if(!this.btAdd)
            throw "É preciso ter um HTML Button para utilizar essa classe"

        
    }

    attachEvents(){
        this.container.parentElement.addEventListener("click", ev=>{
            if(ev.target.parentElement.classList.contains(this.container.classList[0])){
                if(ev.target.classList.contains("add"))
                    this.add(ev)
                else if (ev.target.classList.contains("remove"))
                    this.rem(ev.target.parentElement)   
            }else{
                
                return false;
            }
        })
    }

    add(ev){
     
        let clone = this.container.cloneNode(true)
        clone.querySelectorAll("input,textarea,select").forEach(inp => inp.value = "")

        let selfContainer = ev.target.closest(".dup-container")
        this.container.parentElement.insertBefore(clone, selfContainer)
        clone.querySelector("input").focus()
        
        let buttons = document.querySelectorAll("."+this.container.classList[0]+ " button")
        
        
        this.changeButton(buttons, false)
        this.changeButton(buttons[0], true)
    }

    changeButton(buttons, condition){
        if(!condition){
            for (let but of buttons){
                but.classList.remove("add")
                but.classList.add("remove")
                but.innerText = "-"
            }
        }else{
            buttons.classList.remove("remove")
            buttons.classList.add("add")
            buttons.innerText =  "+"
        }
    }

    rem(element){
        element.remove()
    }
}