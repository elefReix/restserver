const {response,request} = require('express')
const Usuario = require('../models/usuario')
const bcrypt = require("bcryptjs");
const usuario = require('../models/usuario');

const usuariosGet = async (req= request,res=response)=>{
    let {limite=2,desde=0} = req.query

    const [total,usuarios] = await Promise.all([
        Usuario.countDocuments(),
        Usuario.find({estado:true}).skip(Number(desde)).limit(Number(limite))
    ])
    res.json({msg:'get - controller',total,usuarios})
}

const usuariosPost = async (req,res=response)=>{
    
    try {
        let {nombre,correo,password,rol} = req.body;
        //creamos una nueva instancia de un usuario
        const usuario = new Usuario({nombre,correo,password,rol});
        //Encriptar el password
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password,salt)
        //Guardar en base de datos
        await usuario.save();
        res.json({msg:'Usuario creado',usuario})
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error:error.message})
    }
}
 
const usuariosPut = async (req,res=response)=>{
    try {
        const {id} = req.params
        let {_id,password,google, correo, ...rest} = req.body
        //TODO validar contra base de datos 
        if (password) {
            const salt = bcrypt.genSaltSync() 
            password = bcrypt.hashSync(password,salt)
        }
        const usuario = await Usuario.findByIdAndUpdate( id, rest)
        res.json({msg:'Usuario actualizado',usuario})
    } catch (error) {
        console.log(error);
        res.json({msg:'Error',error})
    }
}

const usuariosDelete = async (req,res=response)=>{
    let {id} = req.params
    const usuario = await Usuario.findByIdAndUpdate(id,{estado:false})
    res.json({msg:'delete - controller',usuario})
}

const usuariosPatch = (req,res=response)=>{
    res.json({msg:'patch - controller'})
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}