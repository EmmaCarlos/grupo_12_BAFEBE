//van a venir aca todas las direcciones(about , register,login , etc)
const path = require('path')

module.exports= {
    index:(req,res)=> res.render(path.resolve(__dirname,"../views","index.ejs")),
    register:(req,res) => res.render(path.resolve(__dirname,"../views","register.ejs")),
    login:(req,res)=> res.render(path.resolve(__dirname,"../views","login.ejs"))
}
