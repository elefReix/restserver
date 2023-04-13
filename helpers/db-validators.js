const Rol = require('../models/role')
const Usuario = require('../models/usuario')

const rol_validator = async (rol='') =>{
    const existeRol = await Rol.findOne({rol})
    if (!existeRol) {
        throw new Error(`Rol ${rol} no registrado en base de datos `)
    }
}

const email_validator = async (correo ='') =>{
    const existe_email = await Usuario.findOne({correo})
    if (existe_email) {
        throw new Error(`El email ${correo} ya esta registrado en base de datos `)
    }
}

const existe_usuario_por_validator = async (id) =>{
    const existe_usuario = await Usuario.findById(id)
    if (!existe_usuario) {
        throw new Error(`No existen usuario con el id ${_id} `)
    }
}

module.exports = {
    rol_validator,
    email_validator,
    existe_usuario_por_validator
}