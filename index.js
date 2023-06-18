const express = require('express');
const getIndianStates = require('./getIndianStates')

const app=express();

app.use(express.static('public'))

app.get('/api/states',async(req,res) =>{
    const states = await getIndianStates();
    res.json(states);
    
});

const port = process.env.PORT || 4242;
app.listen(4242 , ()=>{
    console.log(`Listening at http://localhost:${port}`);
})