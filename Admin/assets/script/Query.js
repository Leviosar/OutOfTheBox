const container = document.querySelector("div.consultas-container")
const queryInput = container.querySelector("input[type=text]")
const table = container.querySelector("table.consultas")
const submitButton = container.querySelector("button")

submitButton.addEventListener("click", getShit)

async function getShit() {
    let response = await fetch("http://labmatii.ifc-camboriu.edu.br/oob/admin/read.php?query="+queryInput.value);
    let data = await response.json()
    buildResultTable(data, table)
}

function buildResultTable(dataArray, container){

    for(let i = 0; i < dataArray[0].lenght; i++){
        let th = document.createElement("TH")
        th.innerText = i
        container.querySelector("thead").appendChild("th")
    }

    for (var i = 0; i < dataArray.length; i++) {
        let tr = document.createElement("TR")
        for (var j = 0; j < dataArray[i].length; j++) {
            let td = document.createElement("TD")
            td.innerText = dataArray[i][j]
            tr.appendChild(td)
        }
        container.querySelector("tbody").appendChild(tr)
    }
}