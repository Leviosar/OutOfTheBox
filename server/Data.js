module.exports = class Connect {
    constructor(){
        const { Pool } = require('pg')
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'wisdom',
            password: 'youshallnotpassword',
            port: 5432,
          })
    }

    async select(query, request, response, data){
        let params = []
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                params.push(data[key]);
            }
        }

        await this.pool.connect()

        await this.pool.query(query, params, async (err, res)=>{
            if (err) { console.log(err) }
            else{
                await this.pool.end()
                return res.rows
            }
        })
    }

    async insert(query, request, response, data){
        let params = []
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                params.push(data[key]);
            }
        }

        await this.pool.connect()

        await this.pool.query(query, params, async (err, res)=>{
            if (err) { 
                let reply = {status: false, values: data, error: err}
                return reply
            }
            else{
                let reply = {status: true, values: data, error: 'none', inserted: res}
                await this.pool.end()
                return reply
            }
        })
    }
}