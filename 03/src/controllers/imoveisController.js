const { imoveis } = require("../database");

const listaImoveis = (req,res) => {
    res.send(imoveis)
}

const filtraImoveis = (req,res) => {
    const { id } = req.params

    const resultado = imoveis.find(imovel => imovel.id === Number(id))

    if(!resultado) {
        res.send("Resultado não consta no banco de dados!")
    }

    res.send(resultado)
}

module.exports = {
    listaImoveis,
    filtraImoveis
}