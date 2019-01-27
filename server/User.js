module.exports = class User{

    
    constructor(){
        let Connection = require("./Data")
        this.connection = new Connection()
    }

    // Input: request<express.request>, response<express.response>
    // Output: JSON
    // Output format:
    // {
    //   status: boolean,
    //   token: string,
    //   msg: string
    // }
    // Description: Verify user's email existance in the database, in case true, compare the input password with the database bcrypt hash
    // and returns the user's token. In case false, throw an error
    
    async login(request, response){

        let rows = await this.connection.select("SELECT id, password FROM users WHERE email = $1", request, response, [request.body.email])
        let hash = rows[0].password
        let bcrypt = require("bcrypt")
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

    // Input: request<express.request>, response<express.response>
    // Output: JSON
    // Output format:
    // {
    //   status: boolean,
    //   id_user: string
    // }
    // Description: Receives user's token (SHA256) from the request and searchs for the value on the access_token table
    // in case true, authenticate the user and returns the id. In case false throw an error

    async auth(request, response){
        await this.connection.select("SELECT * FROM access_token WHERE token = $1", request, response, request.params)
    }

    // Input: request<express.request>, response<express.response>
    // Output: JSON
    // Output format:
    // {
    //   id: integer,
    //   name: string
    //   email: string
    //   password: string
    // }
    // Description: Select all form all users (this really shouldn't be used)

    async all(request, response){
        await this.connection.select("SELECT * FROM users", request, response)
    }

    // Input: request<express.request>, response<express.response>
    // Output: JSON
    // Output format:
    // {
    //   status: true,
    //   token: string,
    //   id: integer
    // }
    // Description: Generate and insert (using postgreSQL upsert) a random SHA256 token to auth an user, returns the user_id and token

    async generateToken(request, response){
        let hash = require("crypto")
        let token = hash.createHmac('sha256', (Math.random() * 10000000000).toString()).digest('hex')
        let reply = await this.connection.insert("INSERT INTO access_token (token, id_user, created_in) VALUES ($1, $2, CURRENT_TIMESTAMP) ON CONFLICT (id_user) DO UPDATE SET token = $1, created_in = CURRENT_TIMESTAMP",
        request, response, [token, request.params.id])
        console.log(reply)
    }

    // Input: request<express.request>, response<express.response>
    // Output: JSON
    // Output format:
    // {
    //   status: boolean,
    //   msg: string,
    //   error: string
    // }
    // Description: Register a user in the database with 10 rounds bcrypt hash

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
