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

const usuario_activo_validator = async (correo ='') =>{
    const usuario_activo = await Usuario.findOne({correo})
    if (!usuario_activo.estado) {
        throw new Error(`El usuario ${correo} esta desactivado o no existe `)
    }
}

const existe_usuario_por_validator = async (correo) =>{
    const existe_usuario = await Usuario.findOne({correo})
    if (!existe_usuario) {
        throw new Error(`No existen usuario con el correo : ${correo} `)
    }
}

module.exports = {
    rol_validator,
    email_validator,
    usuario_activo_validator,
    existe_usuario_por_validator
}