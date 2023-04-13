const { validationResult } = require('express-validator');

const validarCampos = (req,res,next) =>{
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({errores})
    } 
    //si llega a este punto sigue con el siguiente middleware 
    next()
    //si termina los middleware ejecuta el controlador
}

module.exports = validarCampos
