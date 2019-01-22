module.exports = class User{

    
    constructor(){
        let Connection = require("./Data")
        this.id = 1
        this.token = 'NAIBYEDAW'
        this.info = {}    
        this.connection = new Connection()
    }

    getInfo(request, response){}
    
    async login(request, response, exp){
        
        // Selects password from the database
        let rows = await this.connection.select("SELECT id, password FROM users WHERE email = $1", request, response, [request.body.email])
        let hash = rows[0].password
        
        // Bcrypt implementation
        let bcrypt = require("bcrypt")
        
        // Get password from body
        let password = request.body.password
        
        bcrypt.compare(password, hash, async (err, res)=>{
            if (err) response.json({error:true, msg: err})
            else{
                if (res == true) {
                    let token = await this.connection.select("SELECT token FROM access_token WHERE id_user = $1", request, response, [rows[0].id])
                    response.json({status: true, token: token[0].token})
                }else{
                    response.json({status: false, msg: "Email or password are wrong, idiot"})
                }
            }
        })
    }

    async auth(request, response){
        await this.connection.select("SELECT * FROM access_token WHERE token = $1", request, response, request.params)
    }

    async all(request, response){
        await this.connection.select("SELECT * FROM users", request, response)
    }

    async generateToken(request, response){
        let hash = require("crypto")
        let token = hash.createHmac('sha256', (Math.random() * 10000000000).toString()).digest('hex')
        let reply = await this.connection.insert("INSERT INTO access_token (token, id_user, created_in) VALUES ($1, $2, CURRENT_TIMESTAMP) ON CONFLICT (id_user) DO UPDATE SET token = $1, created_in = CURRENT_TIMESTAMP",
        request, response, [token, request.params.id])
        console.log(reply)
    }

    async register(request, response){
        let bcrypt = require("bcrypt")

        await bcrypt.hash(request.body.password, 10, (err, hash)=>{
            if (err) response.json({error:true, msg: err})
            else{
                request.body.password = hash
            }
        })

        let reply = await this.connection.insert("INSERT INTO users (name, email, password, created_in) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)", request, response, [request.body.name, request.body.email, request.body.password])
        
        if (reply.status) {
            response.json({status: true, msg: "Cadastro realizado com sucesso"})    
        }else{
            response.json({status: false, msg: "Não foi possível realizar o cadastro", error: reply.error})    
        }
    }
}
