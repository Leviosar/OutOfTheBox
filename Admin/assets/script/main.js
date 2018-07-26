let mainForm = document.querySelector('form')
let mainFormSteps = document.querySelectorAll('div.steps div.step[data-pos]')
let containerInfo = document.querySelector('div.info div.window-container')
let containerForm = document.querySelector('form div.window-container')
let phoneContainer = document.querySelector('div.phoneContainer')
let emailContainer = document.querySelector('div.emailContainer')
let finalStep = document.querySelector('div.steps div:last-child')
let scrollerInfo = new Scroller(containerInfo)
let scrollerForm = new Scroller(containerForm)

document.querySelector('form').addEventListener('submit', ev => ev.preventDefault())

mainFormSteps.forEach(step =>{
    step.addEventListener('click',ev=>{
        scrollerInfo.slide(step.dataset.pos)
        scrollerForm.slide(step.dataset.pos)
    })
})

containerForm.addEventListener("scroller-after", ev=>{
    if(ev.detail.currentWindow == 3 && checkFields() != undefined)
        scrollerForm.windows[3].firstElementChild.innerText = "Você não preencheu os campos "+checkFields() 
})

