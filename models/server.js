const express = require('express')
const cors = require('cors');
const dbConnection = require('../database/config');
class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        this.authpath = '/api/auth'

        //Conectar a base de datos
        this.conectarDB()

        //Middlewares
        this.middleware()
        //Rutas 
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    middleware(){
        //CORS
        this.app.use(cors())

        //Informacion que venga en post, put o delete lo serializa a un objecto json
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.authpath,require('../routes/auth'))
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }

    listen(){
        this.app.listen( this.port, ()=> {console.log(`Server running on port ${this.port}`)} )
    }

}

module.exports = Server