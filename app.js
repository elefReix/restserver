require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')

const port = process.env.PORT

hbs.registerPartials(__dirname + '/views/partials',(err)=>{})
app.set('view engine','hbs')

//configuracion middleware
app.use( express.static('public') )

app.get('/ping', (req,res)=>{
    res.send('hola elef')  
})

app.get('/', (req,res)=>{
    res.render('home',{
        nombre :' Katiana Vazquez Corrales',
        titulo:'born'
    })
})



app.get('/generic', (req,res)=>{
    res.render('generic')
    // res.sendFile(__dirname+'/public/generic.html')
})

app.get('/elements', (req,res)=>{
    res.render('elements')
})

app.get('/index', (req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.get('*', (req,res)=>{
    res.sendFile(__dirname+'/public/404.html')
})

app.listen( port, ()=> {console.log(`Server Corriendo en el puerto ${port}`)} )