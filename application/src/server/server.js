let Express = require("express")
let User = require("../server/User.js")
let c_app = Express()
let c_server = c_app.listen(3000, ()=>{console.log('Server is running at localhost:3000')})
c_app.use(Express.json())
let c_user = new User();

c_app.post("/login", c_user.login.bind(c_user))
c_app.post("/register", c_user.register.bind(c_user))
c_app.get("/info/:param", c_user.getInfo)
c_app.get("/all", c_user.all.bind(c_user))
c_app.get("/auth/:token", c_user.auth.bind(c_user))
c_app.get("/generateToken/:id", c_user.generateToken.bind(c_user))
