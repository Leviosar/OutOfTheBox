var fields = document.querySelectorAll('form input')
var button = document.querySelector('button[type=button]')

button.addEventListener('click', ev=>{
	if(fields[0].value.length > 3 && fields[1].value.length > 10 && fields[2].value.length >= 8){
		let password = CryptoJS.MD5(fields[2].value).toString()
		insertNewUser(fields[0].value, fields[1].value, password)
	}else{
		alert("Insira seus dados corretamente")
	}
})
