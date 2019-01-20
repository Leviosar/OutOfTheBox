let trigger = document.querySelector('div.menu-trigger')
let triggerClose = document.querySelector('div.menu-trigger-close')
let side = document.querySelector('div.side-menu')
let container = document.querySelector('div.limits')
let todo = document.querySelector('div.todo')
let header = document.querySelector('header')
let shadowMenu = document.querySelector('div.shadow-menu')
let backButton = document.querySelector('div.logout')
let menuStatus = false;

trigger.addEventListener('click', ev=>{
    triggerClose.className = 'menu-trigger-close rotate-90'
    menuCheck()
})

triggerClose.addEventListener('click', ev=>{
    triggerClose.className = 'menu-trigger-close rotate-180'
    menuCheck()
})

shadowMenu.addEventListener('click', ev=>{
    triggerClose.className = 'menu-trigger-close rotate-180'
    menuCheck();
})

backButton.addEventListener('click', ()=>{
    logOut()
})

function menuCheck(){
    if(!menuStatus){
        menuStatus = true
        side.classList += ' side-menu-open'
        shadow()
    }else{
        menuStatus = false
        side.className = 'side-menu'
        shadow()
    }
}

function shadow(){
    if(menuStatus){
        shadowMenu.style.left = '70vw'
    }else{
        shadowMenu.style.left = '-30vw'
    }
}

function shadowColor(){
    if(menuStatus){      
        shadowMenu.style.background = 'rgba(30, 30, 30, 0.4)'
    }else{
        shadowMenu.style.background = 'rgba(30, 30, 30, 0)'
    }
}

