const {response,request} = require('express')

const usuariosGet = (req= request,res=response)=>{
    const {nombre='no name', nickname} = req.query
    res.json({msg:'get - controller',nombre, nickname})
}

const usuariosPost = (req,res=response)=>{
    console.log(req.body);
    const {nombre,edad} = req.body
    res.json({msg:'post - controller',nombre})
}

const usuariosPut = (req,res=response)=>{
    const {id} = req.params
    res.json({msg:'put - controller',id})
}

const usuariosDelete = (req,res=response)=>{
    res.json({msg:'delete - controller'})
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