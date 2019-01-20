module.exports = class User{

    
    constructor(){
        let Connection = require("./Data")
        this.id = 1
        this.token = 'NAIBYEDAW'
        this.info = {}    
        this.connection = new Connection()
    }

    login(request, response){

    }

    getInfo(request, response){
        let data = request.params
        console.log(data)
        // response.send(JSON.stringify({
        //     body: "a",
        //     req: data.param
        // }))
    }

    async auth(request, response){
        await this.connection.query("SELECT * FROM access_token WHERE token = $1", request, response, request.params)
    }

    async all(request, response){
        await this.connection.query("SELECT * FROM users", request, response)
    }

    async generateToken(request, response){
        let hash = require("crypto")
        let token = hash.createHmac('sha256', (Math.random() * 10000000000).toString()).digest('hex')
        let rep = await this.connection.query("INSERT INTO access_token (token, id_user, created_in) VALUES ($1, $2, CURRENT_TIMESTAMP)")
        if (rep.status) { return true}
    }
}