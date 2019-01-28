let Express = require("express")
let User = require("./User.js")
let c_app = Express()
let c_server = c_app.listen(3000, ()=>{console.log('Server is running at localhost:3000')})
c_app.use(Express.json())
let c_user = new User();

c_app.post("/login", c_user.login.bind(c_user))
c_app.post("/register", c_user.register.bind(c_user))
c_app.post("/createClass/", c_user.registerClass.bind(c_user))
c_app.get("/all", c_user.all.bind(c_user))
c_app.get("/auth/:token", c_user.auth.bind(c_user))
c_app.get("/generateToken/:id", c_user.generateToken.bind(c_user))


// let Express = require("express")
// let User = require("../server/User.js")

// class Server{
//     constructor(Express, controller){
//         this.core = Express()
//         this.core.listen(3000, ()=>{console.log("Server is listening at 3000")})
//         this.core.use(Express.json())
//         this.user = controller
//     }

//     setRoutes(){
//         this.core.post("/login", this.controller.login.bind(this.controller))
//         this.core.post("/register", this.controller.register.bind(this.controller))
//         this.core.get("/all", this.controller.all.bind(this.controller))
//         this.core.get("/auth/:token", this.controller.auth.bind(this.controller))
//         this.core.get("/generateToken/:id", this.controller.generateToken.bind(this.controller))
//     }
// }

// let server = new Server(Express, new User())
// server.setRoutes()


