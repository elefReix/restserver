const express = require('express')
const cors = require('cors')
class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3017
        this.usuariosPath = '/api/usuarios'
        //Middlewares
        this.middleware()
        //Rutas 
        this.routes()
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
       this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }

    listen(){
        this.app.listen( this.port, ()=> {console.log(`Server Corriendo en el puerto ${this.port}`)} )
    }

}

module.exports = Server
