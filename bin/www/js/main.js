var $ = function (select) {
    return document.querySelector(select)
}
let userData
let url = "http://www.labmatii.ifc-camboriu.edu.br/oob/"
let fileName= location.href.split("/").slice(-1)

if(fileName != "login.html" && fileName != "cadastro.html")
    window.onload = getUserData()

/* Start of CRUD requests */

// InsertNewUser/Create, receives 3 strings, name, login and a MD5 hash password, if returns true, call to tryLogin()
async function insertNewUser(nome, login, password){
    let response = await fetch(url+"php/insert.php?login="+login+"&nome="+nome+"&pass="+password);
    let data = await response.text()
    if(data == "true")
        tryLogin(login, password)
    else if(data == "false")
        return
    else
        swal("Erro no cadastro", data, "error")
}

/* tryLogin/Read, receives 2 strings, login and a MD5 hash password to make a fetch request of login
if returns something, sets the localStorage key to a stringfied json containing user data.*/
async function tryLogin(login, password){
    let response = await fetch(url+"php/login.php?login="+login+"&pass="+password);
    let data = await response.text()
    if(data != "false"){
        localStorage.setItem("userData", data)
        getUserData()
        if(fileName == "login.html" || fileName == "cadastro.html")
            window.location.href = "getstarted.html"
    }else{
        swal("Erro no login", "Verifique seus dados", "error")
    }
}

/* updateUser/Update receives 4 arguments to make a fetch request to update.php, changing all the user data on the db to the new/old arguments
after the response, call to read method to update the display */
async function updateUser(nome, login, password, id){
    let response = await fetch(url+"php/update.php?login="+login+"&nome="+nome+"&pass="+password+"&id="+id)
    let data = await response.text()
    if(data == "true"){
        swal("Sucesso", "Seus dados foram atualizados", "success")
    }else{
        swal("Erro", "Houve um problema durante a atualização do seus dados", "error")
    }
    tryLogin(login, password)
}

/* deleteUser/Delete, receives only the user id to make a fetch request to delete.php and erases the user on db, after the response leads to index */
async function deleteUser(id){
    let confirm = await swal("Tem certeza que deseja apagar?", 
        {
            dangerMode: true,
            buttons: true,
            button:{
                text: "Certeza?"
            }   
        })
    if(confirm){
        let response = await fetch(url+"php/delete.php?id="+id)
        let data = await response.text()
        if(data == "true"){
        localStorage.clear()
        swal("Usuário excluido", "Você será redirecionado para a tela inicial", "success")
        window.location.href = "index.html"
        }
    }else{
        return
    }
    
}

function getUserData(){
    if(localStorage.getItem("userData") != null){
        user = new Usuario(JSON.parse(localStorage.getItem("userData")))
    }else{
        window.location.href = "index.html"
    }
}

function checkFields(inputArray){
    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i].value.trim() == "")
            return false
    }
    return true
}

function logOut() {
    localStorage.clear()
    window.location.href = "index.html"
}