const jwt = require('jsonwebtoken')

const generarJWT = (uid='') =>{
    return new Promise( (resolve,reject) =>{
        const payload = { uid }
        jwt.sign(payload,process.env.SECRETEORPRIVATEKEY,{
            expiresIn:'1h'
        },(err,token)=>{
            if (err) {
                reject(err)
            }else{
                resolve(token)
            }
        })
    })
}

module.exports = {
    generarJWT
}