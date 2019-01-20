let Express = require("express")
let User = require("../server/User.js")


let c_app = Express()
let c_server = c_app.listen(3000, ()=>{console.log('Server is running at localhost:3000')})
let c_user = new User();
c_user.id = 1
c_user.token = 'MD5 SHIT BRO'
c_user.info.name = "Picão"

c_app.get("/login", c_user.login)
c_app.get("/info/:param", c_user.getInfo)
c_app.get("/all", c_user.all.bind(c_user))
c_app.get("/auth/:token", c_user.auth.bind(c_user))
c_app.get("/generateToken/:hash", c_user.generateToken.bind(c_user))