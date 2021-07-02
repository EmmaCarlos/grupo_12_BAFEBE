//van a venir aca todas las direcciones(about , register,login , etc)
const path = require('path')

module.exports= {
    index:(req,res)=> res.sendFile(path.resolve(__dirname,"../views","index.html")),
    register:(req,res) => res.sendFile(path.resolve(__dirname,"../views","register.html")),
    login:(req,res)=> res.sendFile(path.resolve(__dirname,"../views","login.html"))
}
