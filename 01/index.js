const express = require("express")

const app = express()

app.get("/somar", (req, res) => {
    const {num1,num2} = req.query

    let resultado = Number(num1) + Number(num2)
    
    res.send(`${resultado}`)
})

app.get("/subtrair", (req, res) => {
    const {num1,num2} = req.query

    let resultado = Number(num1) - Number(num2)
    
    res.send(`${resultado}`)
})

app.get("/multiplicar", (req, res) => {
    const {num1,num2} = req.query

    let resultado = Number(num1) * Number(num2)
    
    res.send(`${resultado}`)
})

app.get("/dividir", (req, res) => {
    const {num1,num2} = req.query

    let resultado = Number(num1) / Number(num2)
    
    res.send(`${resultado}`)
})



app.listen(3000)