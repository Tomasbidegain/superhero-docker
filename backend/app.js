
const cors = require('cors')
const express = require('express');
const app = express()
require('./mongo/index')


app.use(cors())
app.use(express.json());

//Rutas
const superHeroesRoutes = require('./routes/superHeroes.routes')

//Usar rutas
app.use(superHeroesRoutes)

app.listen(4000, function(){
    console.log('Aplicacion corriendo en el puerto 4000')
})