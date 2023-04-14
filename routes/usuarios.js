const { Router } = require('express')
const { check } = require('express-validator')

const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut, usuariosPatch } = require('../controllers/usuarios')

const validarCampos = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')

const {rol_validator,email_validator,existe_usuario_por_validator} = require('../helpers/db-validators')

const router = Router()

router.get('/', usuariosGet)

router.put('/:id',[
    
    check('rol').custom( rol_validator ),
    check('id','No es un id valido').isMongoId(),
    check('id').custom( existe_usuario_por_validator ),
    validarCampos
], usuariosPut)

router.post('/',[
    check('nombre','El nombre no puede estar vacio').notEmpty(),
    check('password','El password debe ser de mas de 6 caracteres').isLength({min:6}),
    check('correo','El correo invalido').isEmail(),
    // check('rol','No es un rol permitido').isIn(['ADMIN_ROL','USER_ROL','DEVELOPER_ROL']),
    check('rol').custom( rol_validator ),
    check('correo').custom( email_validator ),
    validarCampos 
] ,usuariosPost)

router.delete(
    '/:id', 
   [ validarJWT,
    check('id','No es un id valido').isMongoId(),
    check('id').custom( existe_usuario_por_validator ),
    validarCampos]
,usuariosDelete)

router.patch('/', usuariosPatch)

module.exports = router