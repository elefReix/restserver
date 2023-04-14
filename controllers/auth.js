const {response} = require('express')
const Usuario = require('../models/usuario')
const bcrypt = require("bcryptjs");
const {generarJWT} = require('../helpers/generar-jwt') 

const login = async (req,res =response) =>{
    const {correo,password} = req.body
    try {
        //Verificar passsword
        const usuario = await Usuario.findOne({correo})
        const password_correcto = bcrypt.compareSync(password,usuario.password)
        if (!password_correcto) {
            return res.status(400).json({msg:'Password Incorrecto'})
        }
        //Generar el JWT
        const token = await generarJWT( usuario.id )

        res.status(200).json({mdg:'Login ok',usuario, token})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}

module.exports = {login}