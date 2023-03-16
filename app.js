const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req)

    res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    res.writeHead(201,{'Content-Type':'application/csv'}) 

    const persona = {
        id:1,
        nombre:'Katiana', 
        apellidoPaterno:'Vazquez',
        apellidoMaterno:'Corrales'
    }


    res.write('id, Nombre \n')
    res.write('1, Jesus \n')
    res.write('2, Katiana \n')
    res.write('3, Katianita \n')
    res.end()

})

server.listen(3017)
