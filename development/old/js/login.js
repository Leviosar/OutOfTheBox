let fields = document.querySelectorAll('input')
let button = document.querySelector("button")

button.addEventListener("click", ()=>{
	tryLogin(fields[0].value, CryptoJS.MD5(fields[1].value).toString())
})