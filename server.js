const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send({message: 'hello'})
})

app.get('/hospital', (req, res) => {
    res.send({name: 'St. Maria'})
})

app.listen(3000, () => {
    console.log("Server listen to port http://localhost:3000/")
})

