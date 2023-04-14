const { response,request } = require('express')
const jwt = require('jsonwebtoken')

const validarJWT = (req =request,res =response,next) =>{
    const token = req.header('x-token') 
    if (!token) {
        return res.status(401).json({
            msg:'No hay token en la peticion'
        })
    }
    console.log("🚀 ~ file: validar-jwt.js:6 ~ validarJWT ~ token:", token)
    try {
        const payload = jwt.verify(token,process.env.SECRETEORPRIVATEKEY)
        console.log("🚀 ~ file: validar-jwt.js:14 ~ validarJWT ~ payload:", payload)
        next()
    } catch (error) {
        res.status(401).json({
            msg:'token no valido'
        })
    }
}

module.exports = {validarJWT}