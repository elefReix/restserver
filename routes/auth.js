const { Router } = require('express')
const { check } = require('express-validator')

const { login } = require('../controllers/auth')
const validarCampos = require('../middlewares/validar-campos')
const {existe_usuario_por_validator} = require('../helpers/db-validators') 

const router = Router()

router.post('/login',
    check('correo','El campo no es valido').isEmail(),
    //Si el usuario esta activo
    check('correo').custom(existe_usuario_por_validator),
    check('usuario','El campo es obligatrio').notEmpty(),
    validarCampos
,login)

module.exports = router