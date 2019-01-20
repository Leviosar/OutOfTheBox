module.exports = class Connect {
    constructor(){
        const { Pool } = require('pg')
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'wisdom',
            password: 'joao21022001',
            port: 5432,
          })
    }

    async query(query, request, response, data){
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
                response.send(res.rows)
                await this.pool.end()
            }
        })
    }
}