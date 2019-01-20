import { Component, OnInit, Input } from '@angular/core';
import swal from "sweetalert";
import Scroller from "../../assets/js/Scroller.js"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    constructor() {}
    
    @Input() scroll: Scroller 
    private login = <string>""
    private password = <string>""
    
    

    setLogin(ev){this.login = ev.target.value}
    setPassword(ev){this.password = ev.target.value}

    async tryLogin(){
        try{
            let request = await fetch("127.0.0.1/signIn.php",
                {
                    method: "POST",
                    body: JSON.stringify({ login: this.login, password: this.password })
                }
            )

            if (request.ok) {
                let response = await request.json()
                if (response.success) {
                    window.localStorage.setItem("user-token", response.token)
                }else{
                    throw "Usuário ou senha incorretos " + request.status
                }    
            }else{
                throw "Erro na requisição " + request.status
            }
        }catch(e){
            swal(e)
        }
    }

    show(){
        this.scroll.next()
    }

    ngOnInit() {}
}
