const { log } = require('console')
const mongoose = require('mongoose')

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewurlParser:true
        })
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a conectar a Base de Datos')
    }
}

module.exports = dbConnection