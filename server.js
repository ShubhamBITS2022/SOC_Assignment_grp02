const express= require('express')
const app= express()
const sonroute= require('./routes/songRoutes')
const singerroute= require('./routes/singerRoutes')
const albumroute= require('./routes/albumroutes')

// app.get('/', (req,res)=>{
//     res.send('Hello world')
// })
app.use('/api',sonroute)
app.use('/api',singerroute)
app.use('/api',albumroute)
app.listen(3000, ()=>{
    console.log('Node api is running on port 3000')
})