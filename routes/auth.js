const { Router } = require('express')
const { check } = require('express-validator')

const { login } = require('../controllers/auth')
const validarCampos = require('../middlewares/validar-campos')

const router = Router()

router.post('/login',
    check('correo','El campo no es valido').isEmail(),
    check('usuario','El campo es obligatrio').notEmpty(),
    validarCampos
,login)

module.exports = router