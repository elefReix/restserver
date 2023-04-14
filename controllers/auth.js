const {request,response} = require('express')

const login = (req,res =response) =>{
    const {correo,password} = req.body
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
    res.status(200).json({msg:'Funcionando',correo,password})
}

module.exports = {login}