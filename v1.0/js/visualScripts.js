function menuCheck() {
    if (!menuStatus) {
        blurOn(todo)
        menuStatus = true
        side.classList += ' side-menu-open'
        shadow()
    } else {
        blurOff(todo)
        menuStatus = false
        side.className = 'side-menu'
        shadow()
    }
}

function shadow() {
    if (menuStatus) {
        shadowMenu.style.left = '70vw'
    } else {
        shadowMenu.style.left = '-30vw'
    }
}

function blurOn(element) {
    element.style.filter = 'brightness(100%)'
    setTimeout(function () {
        shadowMenu.style.background = 'rgba(0,0,0,40%)'
    }, 500)
}

function blurOff(element) {
    if (!element.style.filter.includes('brightness')) {
        return false
    }else{
        shadowMenu.style.background = 'rgba(0,0,0,0%)'  
        element.style.filter = '';
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let a = Math.floor(Math.random() * 256)

    return "rgba(" + r + ',' + g + ',' + b + ',' + a + ')'
}