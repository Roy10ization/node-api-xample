//Rutas de autenticación de usuario para que un tercero (en este caso postman) pueda acceder a las funciones

let router = require('express').Router()

//Constantes para el apartado de autenticación
const AuthController = require('../Controllers/Auth')
const VerifyToken = require('../Middleware/VerifyToken')

router.post('/login', AuthController.loginUser)
router.post('/logout', AuthController.logoutUser)
router.post('/me', AuthController.getCurrentUser)
router.post('/signup', AuthController.signInUser)




module.exports = router