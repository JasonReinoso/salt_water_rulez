const express = require('express')


//  express app 
const app = express()


app.get('/', (req,res)=>{
    res.json({mssg: 'weclome'})
})


//listen to request
app.listen(4000,()=>{
    console.log('lis222tening')
})

