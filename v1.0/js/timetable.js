var add = $('.add-class');
var timeDay = $('.time-day')
var classNumber;
function classes() {
    xhr = new XMLHttpRequest()
    xhr.open('GET', 'php/fetchClass.php')
    xhr.addEventListener('load', ev=>{
        console.log(xhr.responseText)
        classNumber = JSON.parse(xhr.response);
        createClass(classNumber.Nome_Aula, classNumber.Horario_Inicio, classNumber.Horario_Final, classNumber.Cor_Aula)
    })
    xhr.send();
}

function createClass(title, initTime, finalTime, label) {
    let divClass = document.createElement('DIV')
    divClass.className = 'class'
    let divLabel = document.createElement('DIV')
    divLabel.className = 'class-label'
    divLabel.style.background = label;
    let divBody = document.createElement('DIV')
    divBody.className = 'day-body'
    let smallTime = document.createElement('SMALL')
    smallTime.innerText = initTime + '-' + finalTime
    let spanTitle = document.createElement('SPAN')
    spanTitle.innerText = title

    divBody.appendChild(smallTime)
    divBody.appendChild(spanTitle)
    divClass.appendChild(divLabel)
    divClass.appendChild(divBody)
    timeDay.appendChild(divClass)
}

add.addEventListener('click', function tal() {
    window.location = 'addClass.html'
})