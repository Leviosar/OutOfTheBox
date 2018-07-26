var colorPicker = $('div.colorPicker')
var colorLabel = $('div.colorLabel')
var currentColor = '#f4c242'
var colors = $('div.colors')
var butAdd = $('input[type=button]')
var title = $('input[type=text]').value
var days = document.querySelectorAll('div.day')
var time = document.querySelectorAll('input[type=time]')
var ranges = document.querySelectorAll('input.range-color')
var displays = document.querySelectorAll('input.display-text')

for (let index = 0; index < ranges.length; index++) {
    ranges[index].value = Math.floor(Math.random() * 256)

    displays[index].value = ranges[index].value

    currentColor = colorLabel.style.background = 'rgba(' + ranges[0].value + ',' + ranges[1].value + ',' + ranges[2].value + ',' + 255 + ')'
    
    ranges[index].addEventListener('input', ev=>{
        displays[index].value = ranges[index].value
        currentColor = colorLabel.style.background = 'rgba('+ranges[0].value+','+ranges[1].value+','+ranges[2].value+','+255+')'
    })
}

colorPicker.addEventListener('click', ev=>{
    pickColors();
    colors.style.display = 'flex'
})

function pickColors() {
    if (colors.children.length != 0) {
        let aux = colors.children;
        for (let i = 0; i < aux.length; i++) {
            aux[i].style.background = randomColor();
            
        }
    }else{
        for (let index = 0; index < 10; index++) {
            let div = document.createElement('DIV');
            div.className = 'colors-options'
            div.style.border = '1px solid black'
            div.style.background = randomColor();
            div.addEventListener('click', ev => {
                currentColor = div.style.background
                colorLabel.style.background = currentColor;
                colors.style.display = 'none'
            })
            colors.appendChild(div)
        }
    }
}

butAdd.addEventListener('click', ev=>{
    if (classDay != 0 && time[0].value != '' && time[1].value != '' && title != ' ') {
        xhr = new XMLHttpRequest()
        xhr.open('GET', 'php/addClass.php?title='+title+'&color='+currentColor+'&start='+time[0].value+'&end='+time[1].value+'&day='+classDay)
        xhr.addEventListener('load', ev=>{
            if (xhr.status == 200) {
                if (xhr.responseText == 'true') {
                    window.location = 'timetable.html'
                }
            }
        })
        xhr.send()
    }
})

var classDay = 0;

for (let i = 0; i < days.length; i++) {
    days[i].addEventListener('click', function() {
        days[0].style.borderColor = '#3390c9'
        days[1].style.borderColor = '#3390c9'
        days[2].style.borderColor = '#3390c9'
        days[3].style.borderColor = '#3390c9'
        days[4].style.borderColor = '#3390c9'
        days[5].style.borderColor = '#3390c9'
        days[6].style.borderColor = '#3390c9'
        days[i].style.borderColor = '#f4c242'
        classDay = i+1;
    })    
}

