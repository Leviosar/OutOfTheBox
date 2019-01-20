export default class Scroller {
    constructor(container, max) {
        this.container = document.querySelector(container)
        this.windows = this.container.children
        this.currentWindow = this.windows[0]
        this.current = 0
        this.toLeft = (container.scrollWidth > container.offsetWidth)
        // this.steps = document.querySelectorAll(triggers)
        this.max = max-1
        this.ev
        this.setup()
    }

    setup() {
    }

    slideTimes(step) {
        this.slide(this.current + step)
    }

    slide(step) {
        this.windows = this.container.children

        if (step < 0) {
            return
        }

        this.current = step - 1

        
        this.ev = new CustomEvent('move', {
            detail:{
                current: this.current
            }
        })

        this.container.dispatchEvent(this.ev)

        // if (this.current < 0 || this.current > this.max)
        //     this.current = 0

        // if (this.windows.length - 1 <= this.current)
        //     this.current = this.windows.length - 1

    
        return this.container.style.transform = `translateX(${this.current * -100}%)`
    }

    next() {
        return this.slide(this.current + 1)
    }

    prev() {
        return this.slide(this.current - 1)
    }
}