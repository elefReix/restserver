const express = require('express')
const app = express()

//configuracion middleware
app.use( express.static('public') )

app.get('/ping', (req,res)=>{
    res.send('hola elef')
})

app.get('/generic', (req,res)=>{
    res.sendFile(__dirname+'/public/generic.html')
})

app.get('/elements', (req,res)=>{
    res.sendFile(__dirname+'/public/elements.html')
})

app.get('/index', (req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname+'/public/404.html')
})

app.listen( 3017, ()=> {console.log('Server Corriendo en el puerto 3017')} )