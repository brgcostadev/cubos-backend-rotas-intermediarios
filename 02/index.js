const express = require("express")
const app = express()

let jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0

app.get("/ver-tudo", (req,res) => {
    res.send(jogadores)
})

app.get("/", (req,res) => {
    if(i > jogadores.length - 1) {
        i = 0
    }
    res.send(`É a vez de ${jogadores[i]} jogar!!!`)
    i++
})

app.delete("/remover", (req,res) => {
    const removerJogador = req.query.indice
    if(jogadores[removerJogador] === undefined) {
        res.send(`Não existe jogador no índice informado (${removerJogador}) para ser removido.`)
    } else {
        jogadores.splice(removerJogador, 1)
        res.send("Removido")
    } 
})

app.post("/adicionar", (req,res) => {
    const adicionarJogador = req.query.nome
    const indice = req.query.indice

    if(!adicionarJogador) {
        res.send("Favor informar o nome do jogador!")
    } else if (indice) {
        jogadores.splice(indice, 0, adicionarJogador)
        res.send("Adicionado pelo indice")
    } else {
        jogadores.push(adicionarJogador)
        res.send("Adicionado")
    }
    
})

app.listen(8000)