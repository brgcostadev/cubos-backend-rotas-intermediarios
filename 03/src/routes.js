const express = require("express")
const { listaImoveis, filtraImoveis } = require("./controllers/imoveisController")

const routes = express()

routes.get("/", listaImoveis)
routes.get("/:id", filtraImoveis)

module.exports = {
    routes
} 